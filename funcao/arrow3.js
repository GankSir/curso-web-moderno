let comparaComThis = function (param) {
  console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComthisArrow = param => console.log(this === param)
comparaComthisArrow(global)
comparaComthisArrow(module.exports)

comparaComthisArrow = comparaComthisArrow.bind(obj)
comparaComthisArrow(obj)
comparaComthisArrow(module.exports)