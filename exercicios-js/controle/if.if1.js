function soBoaNoticia (nota) {
  if (nota >= 7) { //o IF em portugues seria o SE
console.log('Aprovado com ' + nota)
  }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo (valor) {
  if (valor) {
    console.log('E verdade...' + valor)
  }
}
seForVerdadeEuFalo()//undefined é algo false
seForVerdadeEuFalo(null) //null tambem resolve para false
seForVerdadeEuFalo(undefined) // não faz sentido passar o undefined mas nesse caso da false tambem
seForVerdadeEuFalo(NaN)//tambem é false
seForVerdadeEuFalo('')//tambem vai ser false
seForVerdadeEuFalo(0)//unico numero que vai ser false
seForVerdadeEuFalo(-1)// nesse caso é true
seForVerdadeEuFalo(' ') //true
seForVerdadeEuFalo('?') //true
seForVerdadeEuFalo([]) //true
seForVerdadeEuFalo([1, 2]) //true
seForVerdadeEuFalo({})//true
