// UM ARRAY É UM OBJECT
const valores = [7.7, 8.9, 6.3, 9.2] //usa se virgula para separar os elementos dentro do array
console.log(valores[0], valores[3])

valores[4] = 10 //vocẽ pode atribuir ao elemento criando mas não pode redefinir(Podemos acessar e ate alterar os valores)
console.log(valores)
console.log(valores.length) //Posso acessar uma quantidade de array

valores.push({id: 3}, false, null, 'teste') //adiciona novos elementos no array
console.log(valores)

console.log(valores.pop()) //Retira o ultimo valor do array e nos retorna
delete valores[0] //Deleta valor do array
console.log(valores)

console.log(typeof valores)