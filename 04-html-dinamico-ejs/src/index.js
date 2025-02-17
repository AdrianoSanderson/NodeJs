const express = require('express')
const path = require('node:path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))


app.get('/', (request, response) => {
    const title = 'Titulo alterado'
    const text = 'Texto dinâmico'
    response.render('index', { title, text })
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))