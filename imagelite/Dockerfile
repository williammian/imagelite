# Usa uma imagem Node.js leve
FROM node:22-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos essenciais para rodar o Next.js
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copia apenas a pasta .next e arquivos necessários
COPY .next ./.next
COPY public ./public

# Define usuário seguro
USER node

# Expõe a porta do Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]
