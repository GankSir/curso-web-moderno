//Armazendo uma função dentro de uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {  //A => é = a escrita função
  return a + b
}

console.log(soma(2, 3))

//retorno implicito     arrow function e logo depois o return implicito
const subtracao = (a, b) => a - b //Quando nao tenho a chaves ou o corpo da função significa que a função tera uma unica linha
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) //Nesse caso temos so 1 parametro entao não precisa envolver em ()
imprimir2('Legal!!!')