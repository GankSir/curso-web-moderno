const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Aqui obtemos as chaves
console.log(Object.values(pessoa))// aqui reservamos os valores do objeto 
console.log(Object.entries(pessoa))// Nesse caso conseguimos pegar as chaves e valores, ele nos retorna um array com subs array par chave e objeto
//podemos percorrer esses array usando um forEach por exemplo:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}, ${valor}`)
})
//quando queremos definir uma propriedade de Objetos
//essa é uma propriedade que não aceita ser subscrito
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01,01,2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
Object.freeze(obj)
console.log(obj)

