
//Essa é uma construção valida mas não temos nada de interessante nela

function area (largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`)
  } else {
    return area
  }
}

console.log(area(2, 2)) //nesse caso ele faz 2x2
console.log(area(2))//nesse caso o segundo numero da undefined o resultado vem NaN
console.log(area())//Retorna em NaN
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))