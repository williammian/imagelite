'use client'

import Login from '@/app/login/page';
import { useAuth } from '@/resources';
import { useEffect, useState } from 'react';

interface AuthenticatedPageProps {
    children: React.ReactNode
}

export const AuthenticatedPage: React.FC<AuthenticatedPageProps> = ({
    children
}) => {

    const auth = useAuth();
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
        setIsValid(auth.isSessionValid());
    }, []);

    if (isValid === null) {
        return <p>Loading...</p>; // Evita erro de renderização antes da validação do token
    }

    if (!isValid) {
        return <Login />;
    }

    return (
        <>
            {children}
        </>
    )
}