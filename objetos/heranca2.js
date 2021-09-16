//cadeia de prototipos (prototype chain)
Object.prototype.attr0 = '0'//Não faça isso em casa
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }//para relacionar o objeto pai no prototipo avo usarmos __proto
//o pai tem como prototipo o avo
const filho = { __proto__: pai, attr3: 'C' }//O filho tem como prototipo o pai 
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this, this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)//Nesse momento estabelecemos uma relação do Objeto ferrari 
//com o protoripo carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(50)
console.log(volvo.status())

ferrari.acelerarMais(120)
console.log(ferrari.status())