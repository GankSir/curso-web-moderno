function teste1 (num) {
  if (num > 7) //se voce quer colocar varias sentencas dentro de um bloco
    //voce precisa usar chaves
    console.log(num)

  console.log('final')
}
//teste1(6)
//teste1(8)

function teste2 (num) {
  if (num > 7); { //cuidado com o ; N]ao usar com as estruturas de controle
    console.log(num)
  }
}
teste2(6)
teste2(8)
// não use ; na estrutura de codigos com if ( se atente nesses detalhes )