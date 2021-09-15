//o metado get é usado para ler o valor de uma variavel
//o metodo set é usado para alterar o valor de uma variavel...!

const sequencia = {
    _valor: 1, //convenção
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this.valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)