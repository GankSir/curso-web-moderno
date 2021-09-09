//Objeto de coleção de pares e valores
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
//console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereço: {
      logradouro: 'Rua ABC',
      numero: 123
    }

  },
  condutores: [{
    nome: 'junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 42
    }],
  calculaValorSeguro: function(){

  }
}
carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['numero']
delete carro.proprietario.endereço
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)

