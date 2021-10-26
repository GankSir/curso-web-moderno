let isAtivo = false
                        //Js aceita  Literal false ou true pra definir um resultado
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)  //Uma negação !!2x você volta a ao valor original

console.log(!isAtivo) // Negação

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!4)
console.log(!!' ')            //Tudo isso em JS resolve para verdadeiro
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))



console.log('Os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAlivo = false))

console.log('pra finalzar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'

console.log(nome || 'Desconhecido') // Nesse exemplo do || caso o nome seja valido usa o que esta dentro ''
