# API de autenticação de usuário

## Sobre o projeto
Esta API foi desenvolvida para prática dos conceitos de autenticação e autorização de um usuário dentro de um sistema.
Permitindo o registro de novos usuários no sistema e a autenticação via login. Além disso, a API oferece uma rota protegida, acessível apenas por usuários autenticados e autorizados.

## Estrutura de Pastas
/src               # Código-fonte principal  
  /controllers     # Classes com métodos de controle das rotas  
  /middlewares     # Funções intermediárias que processam as requisições  
  /models          # Modelos de dados do PostgreSQL  
/config            # Objetos isolados de configurações  
/database          # Classe do banco de dados para conexão e Migrations  

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução Javascript no lado do servidor.
- **Express.js**: Framework para Node.js que facilita a criação de servidores HTTP.
- **PostgreSQL**: Banco de dados relacional SQL open-source, ideal para dados estruturados e operações transacionais complexas.
- **JWT (lib)**: Token compacto para autenticação segura entre partes.
- **Bcrypt (lib)**: Algoritmo de hashing usado para criptografar senhas de forma segura.

## Rodando localmente
Clone o repositório
```bash
git clone https://github.com/Thyago-ES/api-autenticacao.git
```

Instalando as dependências
```bash
npm install
```

Inicializando o servidor
```bash
npm start
```

## Funcionalidades

- **POST :: /api/register**: Registra um novo usuário no sistema, criptografa sua senha e persiste seus dados no banco.
- **POST :: /api/login**: Autentica o usuário verificando as credenciais fornecidas (email e senha) e retorna um token JWT caso a autenticação seja bem-sucedida.
- **GET :: /api/protected**: Acessa uma rota protegida que requer autenticação. Usada para testar se o token do usuário é válido.