let valor  //não inicializado
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString())// Erro! To string nao encontra valor da viarivel null
const produto = {}
console.log(produto.preco) //Não da erro pq o produto ja foi definido mas o preco ainda não
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
produto.preco = null // sem preco
console.log(produto)