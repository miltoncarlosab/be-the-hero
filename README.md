# Sistema Be Hero da Semana OmniStack 11 da Rocketseat

# Backend - Node Js
## Pré-requisitos

 - Node.js >= v12.16.1
 
## Rodar aplicação

- Rodar `npm start` desenvolvimento online em `http://localhost:3333`

## Dependências
- **nodemon** : Faz a aplicação ficar observando qualquer alteração para recomplicar e executar automaticamente (`npm install nodemon -D` para aplicar somente ao ambiente de desenvolvimento)
- **Express** : Lida com rotas (controller)
- **Knex** : Gerenciamento do banco de dados
- **cors** : Fornece um middleware, no projeto, o mesmo é utilizado para controlar o http que permite acesso as rotas

## Scripts utilizados
**Aplicação**
- `npm install` : Instalção de dependências do projeto

**Banco de dados**
- `npx knex migrate:make nome_migracao` : Para criar um arquivo de migração do banco de dados
- `npx knex migrate:latest` : Para executar a migração do banco de dados
- `npx knex migrate:rollback` : Para desfazer a última migração do banco de dados
- `npx knex migrate:status` : Para listar todas as migrations já realizadas

# Frontend - React Js