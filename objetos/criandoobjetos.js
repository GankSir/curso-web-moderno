//usando a notação literal
const obj1 = {}
console.log(obj1)
  //Object em JS
console.log(typeof Object, typeof new Object)//Na hora de contruir podemos jamar os parametros para o new object

const obj2 = new Object
console.log(obj2)

//função construtora
function Produto (nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}
