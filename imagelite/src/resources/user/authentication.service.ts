import { AccessToken, Credentials, User, UserSessionToken } from './users.resources'
import jwt from 'jwt-decode'

class AuthService {
    baseURL: string = 'http://localhost:8080/v1/users';
    static AUTH_PARAM: string = "_auth";

    async authenticate(credentials: Credentials) : Promise<AccessToken> {
        const response = await fetch(this.baseURL + "/auth", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(response.status == 401){
            throw new Error("User or password are incorrect!");
        }

        //retorna o AccessToken
        return await response.json();
    }

    async save(user: User) : Promise<void> {
        const response = await fetch(this.baseURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        });

        //console.log("Response Auth.save: ", response);

        if(response.status == 409){
            const responseError = await response.json();
            //console.log("Json error: ", responseError);
            throw new Error(responseError.error);
        }
    }

    initSession(token: AccessToken){
        if(token.accessToken){
            const decodedToken: any = jwt(token.accessToken);

            //console.log("Decoded token: ", decodedToken);
            
            const userSessionToken: UserSessionToken = {
                accessToken: token.accessToken,
                email: decodedToken.sub,
                name: decodedToken.name,
                expiration: decodedToken.exp
            }

            this.setUserSession(userSessionToken);
        }
    }

    setUserSession(userSessionToken: UserSessionToken){
        try{
            localStorage.setItem(AuthService.AUTH_PARAM, JSON.stringify(userSessionToken));
        }catch(error){}
    }

    getUserSession() : UserSessionToken | null {
        try{
            const authString = localStorage.getItem(AuthService.AUTH_PARAM);
            if(!authString){
                return null;
            }

            const token: UserSessionToken = JSON.parse(authString);
            return token;
        }catch(error){
            return null;
        }
    }

    isSessionValid() : boolean {
        const userSession: UserSessionToken | null = this.getUserSession();
        if(!userSession){
            return false;
        }

        const expiration: number | undefined = userSession.expiration;
        if(expiration) {
            const expirationDateInMillis = expiration * 1000;
            //console.log("Data expiracao: ", new Date(expirationDateInMillis));
            //se data/hora atual menor que a data/hora expiração, então token está válido
            return new Date() < new Date(expirationDateInMillis);
        }

        return false;
    }

    invalidateSession(): void {
        try{
            localStorage.removeItem(AuthService.AUTH_PARAM);
        }catch(error){}
    }
}

export const useAuth = () => new AuthService(); 