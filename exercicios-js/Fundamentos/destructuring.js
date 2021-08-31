// destructuring é um operador de desestruturação
//uma forma de extrair dos objetos seus atributos
//temos array com uma esrutura
//Esse é um recurso que foi introduzido no ES2015
const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua da felicidade',
    numero: 206
  }
}
//const com {} é o operador de destructuring
const { nome, idade } = pessoa //tire de dentro do objeto pessoa o nome e idade
console.log(nome, idade)
//nesse proximo exemplos vamos extrair o nome da variavel atribuindo um novo nome
const { nome: n, idade: i } = pessoa // aqui eu disse que retire o valor de nome e idade
// que são atributos do objeto PESSOA
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//nesse proximo exemplo vamos observar um erro de tentar acessar o atributo de um objeto que não existe
//const { conta: { ag, num } } = pessoa
//console.log(ag, num)

//se eu tiver usando o op