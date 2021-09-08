//Função factory
//factory é uma função que no final sempre retorna um objeto
function criarPessoa () {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())