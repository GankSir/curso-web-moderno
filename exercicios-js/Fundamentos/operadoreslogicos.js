// V e V == true
// v e f == false
// f e ? == false
//op1, op2, op3, op4 == true
//Qualquer um que nao for true se torna false

//TRABALANDO COM OU
//v ou ? == true
//v ou v == true
//f ou f == false

// v xor v == false
// v xor f == true
// f xor v == true
// f xor f == false

//!v == f
//!f == v

function compras (trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2 //Op do tipo OU
  const comprarTv50 = trabalho1 && trabalho2 // op do tipo E
  //const comprarTv32 = trabalho1 = !!(trabalho1 ^ trabalho2) //bitwise xor
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete //operador unario

  return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
