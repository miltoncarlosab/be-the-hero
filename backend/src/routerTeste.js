const express = require('express');

const routes = express.Router();

/* 
    ROTAS DE TESTE 
*/
routes.get('/user', (request, response) =>  {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Milton Bastos',
        idade: 30
    });
})

//Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
routes.get('/userName', (request, response) =>  {
    const query = request.query

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: query.name,
        idade: 30
    });
})

//Route Params: Parâmetros utilizados para identificar recursos
routes.get('/userId/:id', (request, response) =>  {
    const params = request.params
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: `Milton ${params.id}`,
        idade: 30
    });
})

//Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
routes.post('/user', (request, response) =>  {
    const body = request.body
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: body.name,
        idade: body.idade
    });
})

module.exports = routes;