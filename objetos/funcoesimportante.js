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
