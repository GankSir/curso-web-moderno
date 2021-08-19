const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //.isinTeger usado para saber se o number e inteiro ou não

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //coloca a quantidade de casas decimais
console.log(media.toString()) //converte o valor numerico em string
console.log(media.toString(2)) //Converrteu em binario/ colocando valor dentro dos () tranforma em numero binario
console.log(typeof media)
console.log(typeof Number) // Number com N é uma função e com n é o tipo do dado