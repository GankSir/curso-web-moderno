{ //Criar uma variavel dentro de um bloco que não é uma função
  {//fora dawuele bloco a variavel fica visivel
    {
      {
        var sera = 'será???'
      }
    }
  }
}
console.log(sera)

function teste () {
  var local = 123
  console.log(local) //Quando voce define uma variavel dentro de uma funçao
}                    // o escopo dessa variavel esta dentro da função
                    // ela so é visivel dentro da function
teste()
