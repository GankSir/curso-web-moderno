console.log(Math.ceil(6.1)) //ceil eleva ao teto nesse caso operando para um arredondamento

const obj1 = {} //para criar um atributo dentro de um objeto, basta usar a anotacção PONTO
obj1.nome = 'bola'// Mesmo que o atributo não esteja no objeto atributo.nome (por exemplo)
  //temos esse outro exemplo
  //obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome) {
  this.nome = nome //O this significa o nome associado ao nome do objeto

  //this no caso cria um atributo publico
  this.exec = function () {
    console.log('EXEC')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()