const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
//Nesse caso aqui o for/IN vai trazer o indice de cada nota nesse exemplo
for (let i in notas) {// aque recebemos o indice e não so o valor da nota
  console.log(i, notas[i])
}

//tambem é possivel pegar o atributo de um objeto

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 29,
  peso: 64

}

for (let atributo in pessoa)
console.log(`${atributo} = ${pessoa[atributo]}`)