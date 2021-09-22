console.log(typeof Array, typeof new Array)

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

//aqui adicionmanos mais elmentos nos array
aprovados[3] = 'Paulo'
aprovados.push('Abia') 
console.log(aprovados.length)

//Nesse exemplo adicionamos um elemento no indice 9 e o array 
//preencheu os outros elementos como undefined
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()//ordena o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
//splice, podemos selecionar o elemento do array que queremos trabalhar e
//logo em seguidas quais elementos vamo excluir a partir daquele acesso 
//podemos adicionar novos elementos apos excluir ou não tambem.
aprovados.splice(1, 0, 'João', 'Jose')
console.log(aprovados)