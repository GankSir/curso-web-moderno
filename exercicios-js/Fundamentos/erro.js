function tratarErroElancar (erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message, //lancar o tipo do erro
    date: new Date
  }

}
function imprimirNomeGritado (obj) {
  try { //try é um bloco de codigo que dentro dele tem um codigo que voce julga que possa ter um possivel erro
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) { //gerando um erro colocamos o bloco catch para tratar esse erro
      tratarErroElancar(e)
  } finally { //É um bloco que sera executado mesmo se ocorra um erro ou não
    console.log('final')
  }

}
const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)