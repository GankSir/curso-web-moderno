const funcs = []

for (var i = 0; i < 10; i++){
  funcs.push(function () { // vou adicionar um novo elemento no array| Vai ser adicionado uma função anonima
    console.log(i)
  })
}
funcs[2]()//Nesse caso o resultado é 3
funcs[8]()//Nesse caso resultado vai ser 9
//Lembrete(.push adiciona novos elementos no array)