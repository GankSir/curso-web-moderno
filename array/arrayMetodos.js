const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
//o pop retira do array um elemento da ultima posição
pilotos.pop()//massa quebrou o carro
console.log(pilotos)

pilotos.push('Carlitos')
console.log(pilotos)

//o shift retira do array um elemento da primeira posição
pilotos.shift()
console.log(pilotos)

//unshift add o elemento em primeiro lugar na fila
pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//removendo elementos com o metodo splice
pilotos.splice(3, 1)//massa quebrou novamente
console.log(pilotos)

//esse metodo retorna um novo array
//nesse exemplo passamos o 2 como parametros , entao ele vai criar 
//um array a partir do indice 2 
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//Nesse exemplo aqui ele parte do indice 2 e quebra no indice 3, excluindo o indice 4 
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)