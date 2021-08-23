//Objeto sempre é uma coleção de chave e valor

const prod1 = {} //chaves representa objetos
prod1.nome = 'Celular ultra mega'

prod1.preco = 4998.90

prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

//podemos criar os valores dentro das chaves
const prod2 = {
  nome: 'Camisa Polo',
  preco: '79.90'
}
//'{"nome": "camisa Polo", preco: 79.90}' JSON é um formato textual
console.log(prod2)