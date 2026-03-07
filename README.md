# 🎮 Games API
API REST desenvolvida com **Node.js**, **Express** e **MongoDB** para gerenciamento de jogos.<br>
A aplicação permite realizar operações de **CRUD (Create, Read, Update, Delete)** em uma coleção de jogos e conta com **documentação interativa utilizando Swagger**.

O projeto foi desenvolvido com foco em boas práticas de organização de código, tratamento de erros, documentação de API e deploy em produção.

## 📌 Descrição do Projeto
A Games API é uma aplicação backend que permite cadastrar, listar, atualizar e remover jogos de um banco de dados.

A API foi construída utilizando a arquitetura padrão de APIs REST e possui integração com o MongoDB Atlas para armazenamento dos dados.

Além disso, a aplicação conta com:

- Documentação automática com Swagger
- Tratamento global de erros
- Configuração com variáveis de ambiente
- Deploy em nuvem utilizando Render

O objetivo do projeto é demonstrar conhecimentos em desenvolvimento backend com Node.js e criação de APIs RESTful.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Swagger UI
- dotenv

## 📂 Estrutura do Projeto

```
src
│
├── controllers
│   └── gameController.js
│
├── models
│   └── gameModel.js
│
├── routes
│   └── gameRoutes.js
│
├── middlewares
│   ├── errorHandler.js
│   └── middleware.js
│
├── docs
│   └── swagger.json
│
└── server.js
```
### Descrição das pastas

- **controllers** → contém a lógica da aplicação  
- **models** → define os schemas do MongoDB usando Mongoose  
- **routes** → define os endpoints da API  
- **middlewares** → middlewares da aplicação, como tratamento global de erros  
- **docs** → documentação Swagger da API  
- **server.js** → arquivo principal que inicia o servidor

## ⚙️ Funcionalidades

A API permite realizar as seguintes operações:

### Criar jogo
Cadastrar um novo jogo no banco de dados.

### Listar jogos
Retornar todos os jogos cadastrados.

### Buscar jogo por ID
Retornar um jogo específico.

### Atualizar jogo
Editar informações de um jogo existente.

### Remover jogo
Excluir um jogo do banco de dados.

## 🌐 Endpoints da API

Base URL:
```text
https://api-games-dfsv.onrender.com
```

### Listar jogos
```bash
GET /games
```
Retorna todos os jogos cadastrados.

### Buscar jogo por ID
```bash
GET /games/:id
```
Retorna um jogo específico.

### Criar jogo
```bash
POST /games
```

Exemplo de body:
```json
{
  "title": "The Witcher 3",
  "price": 50,
  "platform": "Steam",
  "inStock": true
}
```

### Atualizar jogo
```bash
PUT /games/:id
```

### Deletar jogo
```bash
DELETE /games/:id
```
## 📖 Documentação da API

A documentação completa da API pode ser acessada através do Swagger:

```text
https://api-games-dfsv.onrender.com/docs/swagger
```

A interface permite:
- visualizar todos os endpoints
- testar requisições diretamente no navegador
- visualizar exemplos de respostas

## 🛠️ Instalação do Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
### 2️⃣ Entrar na pasta do projeto
```bash
cd nome-do-projeto
```
### 3️⃣ Instalar as dependências
```bash
npm install
```
### 4️⃣ Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto.

Exemplo:
```env
MONGO_URI=sua_string_de_conexao_mongodb
PORT=3000
```

## ▶️ Executando o Projeto

Para iniciar o servidor em ambiente de desenvolvimento:

```bash
npm run dev
```
Ou:
```bash
npm start
```

Após iniciar, a API estará disponível em:
```text
http://localhost:3000
```
## 📊 Rotas principais
```bash
/           → Informações da API
/games      → Lista de jogos
/docs/swagger → Documentação Swagger
```
## ☁️ Deploy
A API foi publicada na plataforma Render.

Plataforma utilizada:
- Render

Banco de dados:
- MongoDB Atlas

URL da API em produção:
```text
https://api-games-dfsv.onrender.com
```
## 🧠 Decisões Técnicas
Algumas decisões foram tomadas durante o desenvolvimento:

### Uso do Mongoose
O Mongoose foi utilizado para facilitar a modelagem de dados e interação com o MongoDB.

### Documentação com Swagger
A documentação da API foi criada utilizando Swagger, permitindo visualizar e testar os endpoints de forma interativa.

Foi utilizado um arquivo separado:
```text
swagger.json
```
para manter a documentação organizada.

### Middleware de tratamento de erros
Foi implementado um error handler global para centralizar o tratamento de erros da aplicação e manter os controllers mais limpos.

## 👨‍💻 Autor

Desenvolvido por **Luís Otávio**
<br>
Desenvolvedor Frontend focado em **JavaScript, React, Next.js e Node.js**.

## 📫 Contato

GitHub: https://github.com/LuisOtavioPessoa <br>
LinkedIn: https://www.linkedin.com/in/luisotaviopessoa/
