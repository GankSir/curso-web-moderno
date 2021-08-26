const [a] = [10]
console.log(a)

const [n1, , n3, , n5, , n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
//Uma forma de oegar multiplos elemntos de um array
//um array pode ter outros elementos tipo array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //Repare que o primeiro elemento eu ignorei
console.log(nota)