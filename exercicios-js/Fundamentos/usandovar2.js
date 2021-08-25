var numero = 1 //nesse exemplo o console vai imprimir o que esta dentro

{
  var numero = 2 //Observe que temos um bloco de codigos entao o console vai imprimir p que esta dentro do nosso bloco
  console.log('dentro =', numero)
}
console.log('fora =', numero)

//var te,m 2 escopos. O escopo é ate onde a variavel é visivel
//dentro do escopo devemos ter variaveis diferente para nao conflitar
// isso é uma boa pratica de programação
// fuja do escopo global !
//esse processo ocorre usando o indentificador var