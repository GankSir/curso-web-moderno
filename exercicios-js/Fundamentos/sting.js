const escola = "cod3r"

console.log(escola.charAt(4)) //pega um determinado caractere dentro da string
console.log(escola.charAt(5))//
console.log(escola.charCodeAt(3)) //uni code pegamos o code do caractere
console.log(escola.indexOf('3'))//Pegamos o indice delo caractere na string

console.log(escola.substring(1))//7passamos o indice inicial
console.log(escola.substring(0, 3)) //vai do indice 0 ate o indice 3 sem usar o 3

console.log('escola '.concat(escola).concat("!"))//string concatenando com variavel, concatenano com string
console.log(escola.replace(3, 'e'))// faz a troca de uma letra de string

console.log('Ana,Maria,Pedro'.split(','))//converter uma string em um array, É preciso passar nos parametros um separador pra se tornar um array