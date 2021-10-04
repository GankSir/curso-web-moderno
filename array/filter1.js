const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]
//Nesse caso o parametro callback é obrigatorio
console.log(produtos.filter(function (p) {
    return false
}))

const caro = produto => produto.preco >= 2500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro))