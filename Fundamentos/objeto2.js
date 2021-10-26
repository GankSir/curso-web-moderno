console.log(typeof Object) //A função pode ser instanciada apartir da função new
console.log(typeof new Object)//podendo criar multiplas instancia

const cliente = function () {}
console.log(typeof cliente)// podemos criar instancias das funções que definimos
console.log(typeof new cliente)

class Produto {} // Padrão ES 2015 (ES6)
console.log(typeof Produto)//podemos criar functions atraves de uma classe
console.log(typeof new Produto)

