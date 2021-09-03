//Sem Usar o callback
const notasBaixas1 = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}
console.log(notasBaixas1)