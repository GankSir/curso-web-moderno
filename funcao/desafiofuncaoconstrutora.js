function Pessoa (nome) {

  this.nome= nome

  this.falar = function () {
    console.log(`Meu nome é ${nome}`)
  }

}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1.nome)

  //Nesse exemplo de retirar o this do console
  //O codigo vai executar nas não vamo mais
  //poder editar  a variavel,