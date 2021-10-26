const pessoa = {
  saudacao: 'Bom dia!',
  falar () {
    console.log(this.saudacao)
  }
}
pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)//Uma funcao tem outras funcoes
falarDePessoa()