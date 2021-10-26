//criar uma função de forma literal
//Se você não passar nada para uma função ela sempre retorna undefined
//A funcao é obrigatorio o uso de blocos
function fun1 () { }

//podemos armazenar uma variavel
const fun2 = function () { } // Esse exemplo é uma função anonima

//podemos armazenar uma função dentro de um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar())

//Passar função como param
function run (fun) {
  fun()
}

run(function () { console.log('Executando...') })

//Um função pode retornar/Conter uma função
function soma (a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}
soma(2, 3)(4)
//podemos chamar desse jeito tambem
const cincoMais = soma (2, 3)
cincoMais(4)
