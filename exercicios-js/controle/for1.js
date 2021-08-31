let contador = 1
while (contador <= 10) {//While com um limite determinado de repetições
  console.log(`Contador =  ${contador}`)
  contador++
}
for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`)
}
//Aqui vamos navegar do primeiro elemento ate o ultimo(Pratica muito comum em JS)
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]//Primeiro elemento acessado pelo array é no indice 0
for (let i = 0; i < notas.length; i++) { //Lembrando que length é o cumprimento do array
  console.log(`nota = ${notas[i]}`)//Uma forma de navegar no array usamos o length
}
//Declaração de uma var, expressão e incremento são a base do for