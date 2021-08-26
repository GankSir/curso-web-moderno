//par nome valor
const saudacao = 'Opa' //contexto léxico

function exec () {
  const saudacao = 'falaeee' //aqui temos um  outro contexto léxico
  return saudacao
}
//Uma função define o contexto local daquela função

//objetos são grupos aninhados de pares, nomes e valor

//EX: const saudacao = 'EPAAA' (Nesse exemplo com esse codigo ativo iria gerar um erro )

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

//Nesse caso se usar 2 constante com mesmo nome não teremos problemas
//pois as constantes estão em contexto diferentes