console.log(this === global) // false
console.log(this === module) //false

console.log(this === exports) //true
console.log(this === module.exports) //true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // dentro de uma function o this nao aponta pra exports
    console.log(this === module.exports) // false
    console.log(this === global)//dentro de uma funcção o this aponta para o global 


    this.perogo = '...'//Isso esta dentro do escopo global


}

logThis()