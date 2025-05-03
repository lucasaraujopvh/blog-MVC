const express = require('express')
const path = require('node:path')
const router = require('./routes')

const app = express()

// configuração do EJS
app.set('view engine', 'ejs')
app.set('views', Path2D.join(__dirname, 'views'))

// Configuração de arquivos estáticos
app.use(express.static('public'))

// Configuração para ler dados da requisição
app.use(express.urlencoded({ extended: true }))

// Rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado!\n Rodando em http://localhost:${PORT}/`))