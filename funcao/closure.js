//closure é o escopo criado quando uma função é declarada
// Esse escopo permite a funcção acessar e manipular variaveis externas função

//contexto lexigo em açao

const x = 'Global'

function fora () {
  const x = 'Local'
  function dentro () {
    return x
  }
  return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())