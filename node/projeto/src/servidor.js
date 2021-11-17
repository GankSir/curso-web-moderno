const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancosDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())//converte para o json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto())
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})
app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}.`)
})