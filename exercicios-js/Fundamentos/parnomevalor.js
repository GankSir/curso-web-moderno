//par nome valor
const saudacao = 'Opa' //contexto léxico

function exec () {
  const saudacao = 'falaeee' //aqui temos um  outro contexto léxico
  return saudacao
}
//Uma função define o contexto local daquela função

//objetos são grupos aninhados de cpares, nomes e valor

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito legal',
    nume: 123
  }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)