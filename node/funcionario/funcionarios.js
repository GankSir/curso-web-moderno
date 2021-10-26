const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')//client http faz requisicoes

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
        .filter(chineses) //filtra todos os chineses
        .filter(mulheres) //filtra todas as mulheres chinesas
        .reduce(menorSalario) // Função que agrega

    console.log(func)
})

//...
