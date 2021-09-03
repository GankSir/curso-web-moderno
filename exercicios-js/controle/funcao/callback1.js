const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
  console.log(`${indice + 1}, ${nome}`)
}

fabricantes.forEach(imprimir) //Nesse caso forEach é uma funcao de fabricantes e fabricantes é um array
// Eu quero que para cada elemento do array ele chame a função imprimir
//como  padrao o forEach vai passar o nome do elemento percorrido pelo array e o indice

fabricantes.forEach(fabricante => console.log(fabricante))