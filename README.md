# ImageLite

ImageLite é um aplicativo web para cadastro e pesquisa de usuários e imagens, permitindo upload e download de arquivos.

## Tecnologias Utilizadas

- **Back-end**: Spring Boot, Spring Data JPA, Spring Security, JWT
- **Front-end**: React.js, Next.js, Fetch API, Tailwind CSS, Formik
- **Banco de Dados**: PostgreSQL
- **Containerização**: Docker
- **Arquitetura**: Domain-Driven Design (DDD)

## Funcionalidades

- **Cadastro e Pesquisa**: Usuários e imagens
- **Upload e Download**: Gerenciamento de arquivos de imagem
- **Autenticação e Autorização**: Implementadas com JWT
- **Interface Responsiva**: Desenvolvida com Tailwind CSS
- **Validação de Formulários**: Utilizando Formik
- **Containerização**: Configuração para execução com Docker

## Estrutura do Projeto

O projeto está organizado nos seguintes diretórios:

- **bd**: Scripts relacionados ao banco de dados
- **imagelite**: Código-fonte principal do aplicativo
- **imageliteapi**: Código-fonte da API desenvolvida com Spring Boot
- **others**: Arquivos diversos e de configuração

## Como Executar o Projeto

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/williammian/imagelite.git
   ```

2. **Configurar o Banco de Dados**:
   - Certifique-se de ter o PostgreSQL instalado e em execução.
   - Crie um banco de dados chamado `imagelite` e configure as credenciais no arquivo de propriedades do `imageliteapi`.

3. **Executar a API**:
   - Navegue até o diretório `imageliteapi`:
     ```bash
     cd imageliteapi
     ```
   - Execute a aplicação Spring Boot:
     ```bash
     ./mvnw spring-boot:run
     ```

4. **Executar a Aplicação Front-end**:
   - Navegue até o diretório `imagelite`:
     ```bash
     cd ../imagelite
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Inicie o servidor de desenvolvimento:
     ```bash
     npm run dev
     ```

A aplicação estará disponível em `http://localhost:3000`.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

