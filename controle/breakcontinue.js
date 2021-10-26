const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
  if (x == 5) {
    break //Quando temos uma unica sentenca de codigo nao colocamos em um bloco
  }
  console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
  if (y == 5) {
    continue
  }
  console.log(`${y} = ${nums[y]}`)

}
//!!! Atenção não usar esse ultimo exemplo, foi feito so por conhecimento geral
externo:
for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo //Nesse exemplo criamos um brek rotulado
      console.log(`Par = ${a},${b}`)                    //Se não declarar esse break com o externo ele faria o break
                          //No for interno.
  }
}


//O break n~ao age em cime de um bloco if e sim no bloco mais proximo dele
//nesse exemplo o bloco mais proximo é o do for
//o break age nos bloco mais proximo do tipo for switch w while

//Nesse segundo exemplo o Continue ele interrompe o indice que foi delcarado saltando ele
//mas continua executando

//o break causa um desvio de fluxo para fora do laço
//o continue calsa um desvio mas permanece executando o array