function carro (velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0
  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }
  //outro metodo publico criado dentro da estrutura carro
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
}
const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof carro)
console.log(typeof ferrari)