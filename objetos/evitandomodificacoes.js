//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
//Essa função testa de o objeto foi criado de modo extensível
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Bolacha escolar branca'
delete produto.tag
console.log(produto)

//object.seal, Quando selamos novos objetos ,nao conseguimos mais adicionar novos atributos, excl
//ir, mas conseguimos modificar os valor dos atributos dos Objetos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constante


