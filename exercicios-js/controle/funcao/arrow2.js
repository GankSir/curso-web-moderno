// O this dentro de um arrow ele é fixo.

function pessoa () {
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new pessoa