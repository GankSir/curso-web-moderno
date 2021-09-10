const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = {nome: 'Ana'}

//.freeze vai congelaar o objeto pessoa
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)