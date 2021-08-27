let a = 3

global.b = 123
this.c = 456

console.log(a)
console.log(this.a)
console.log(global.a) // nesse caso o global tem mesmo efeto de window
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca: sem var e let
abc = 3
console.log(global.abc)
//module.exports = {e: 456, f: false, g: 'teste'}