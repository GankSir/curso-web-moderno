Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))

    }
    return newArray
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//para resolver esse exercicio temos que chamar primeiro um JSON.parse
//aqui convertemos um texto para um objeto
const paraObjeto = json => JSON.parse(json)
const apenasOpreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasOpreco)
console.log(resultado)
//retorna um array apenas com os preços