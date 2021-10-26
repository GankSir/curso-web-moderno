function getInteiroAleatorioEntre (min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = -1

do {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Acabou!')

//no do while é a unica expressao está depois do bloco