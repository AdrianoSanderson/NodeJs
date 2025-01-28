const http = require('http');

const server = http.createServer((request, response) => {
    const path = request.url;

    if (path === '/') {
        response.writeHead(200)
        response.write("Essa é a home")
    } else if (path === '/contato') {
        response.writeHead(200)
        response.end('Você esta na pagina de contato');
    } else {
        response.writeHead(404)
        response.write('Página não encontrada');
    }

    response.end();
})

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})