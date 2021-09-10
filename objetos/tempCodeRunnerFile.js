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
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory
function criarFuncionario (nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario () {
      return (salarioBase / 30) * nome(30 - faltas)
    }
  }
}

const f1 = criarFuncionario('joão', 7980, 4)
const f2 = criarFuncionario('Mria', 11400, 1)
console.log(f1.getSalario, f2.getSalario())

//object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna objeto
//JSON é um formato textual
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
