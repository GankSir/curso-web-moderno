const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancosDeDados')

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())//converte para o json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto())
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome:req.body.name,
        preco:req.body.preco
    })
    res.send(produto) //JSON
})
app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}.`)
})