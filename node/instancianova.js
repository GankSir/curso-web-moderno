//uma funcao factoring retorna uma nova instancia 
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}