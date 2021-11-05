const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancosDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProduto)// vai converter para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.sed(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', function (req, res, next) {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`servidors executando na porta ${porta},`)
})
