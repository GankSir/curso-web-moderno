//function declaretion
console.log( soma(3, 4))
function soma (x, y) { // usando esse tipo de declaração podemos antes mesmo de
  return x + y // delarar ela, chamar ela .
}

//function expression / Nesse exemplo so consigo chamer essa função depois
const sub = function (x, y) { //Que ela foi declarada
  return x - y

}
console.log(sub(3, 4))

//named functon expression/Nesse exemplo tambem segue o mesmo exemplo anterior
const mult = function mult (x, y) {
  return x * y
}
console.log(mult(3, 4))