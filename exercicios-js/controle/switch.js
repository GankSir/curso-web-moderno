const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {  //floor para baixo Math.ceil pra cima
      case 10:
    case 9:  //Se for 10 ou 9 executa essa linha de codigo
      console.log('Quadro de Honra')
      break
    case 8: case 7:
      console.log('Aprovado')
      break
    case 6: case 5: case 4: //O break causa uma saida do bloco do switch
      console.log('Recuperação')
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    default: //É como se fosse um else
      console.log('Nota inválida')
  }
//console.log('FIM')
}
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(1)
imprimirResultado(-1)
imprimirResultado(11)
imprimirResultado('xddsf')
//No JS para o switch parar de executar o case precisamos usar  palavra break
//nesse caso irá sair do switch sem executar os outros case
//O switch é feito para ter multiplas seleções
//O switch não é uma expressão relacional que mostra verdadeiro ou falso. Switch é
//um selção multipla
//por padrão usamos o Break para que ele possa executar e sair
//caso não colque o break ele sai executando direto
//O default você pode colocar ele em qualquer posição mas
//tem que se atentar em colocar o break para que ele seja executado
//quando for o momento certo, no final não precisa usar o Break