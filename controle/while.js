// O WHILE ele é focado em repetiçoes indeterminada de vezes pode ser usado com
//determinada vezes tambem
function getInteiroAleatorioEntre (min, max) {
  const valor = Math.random() * (max - min) + min //random vai gerar um valor entre 0 e 1
  return Math.floor(valor)

}

let opcao = 0

while (opcao != -1) { //baseado em uma estrutura verdadeiro ou false
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
} //Enquanto a expressão for verdadeira fique repetindo ate que ela se torne false
console.log('Até a próxima')