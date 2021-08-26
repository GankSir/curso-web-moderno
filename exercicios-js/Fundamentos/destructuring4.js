function rand ([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]//nesse caso se o minimo for maior que o maximo inverte as variaveis
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}
console.log(rand([50, 40])) //não precisamos chamar o nome do atributo ja que se trata de um array
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand()) não de desestrutura algo de nulo