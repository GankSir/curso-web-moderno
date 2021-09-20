console.log(typeof String)
console.log(typeof Array) //todos esse 3 tem umm atributo .prototype
console.log(typeof Object)//toda função tem um atributo chamado .prototype

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola cod3r'.reverse())
//Você acessa o array ou a string usando o metodo THIS...
Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd', 'e'].first())