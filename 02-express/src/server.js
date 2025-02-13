const express = require('express');

const server = express();

server.get('/', (request, response) => {
    response.send("Você está na home")
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})