var numero = 1
{
  let numero = 2 //quando temos variaveis no escopo menor temos preferencia para imprimir o que esta dentro
  console.log('dentro =', numero)//se nao tiver escopo menor ele procura no mais abrangente
}
console.log('fora =', numero)