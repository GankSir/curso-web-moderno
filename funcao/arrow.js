let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a //return esta implicito
console.log(dobro(Math.PI))

let ola = function () {
  return 'olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // o _ ali é um parametro valido.
console.log(ola())