function pessoa () {
  this.idade = 0

  const self = this
  setInterval(function () {// essa função disparada uma outra função a partir de um intervalo
     self.idade++          // que voce passou
      console.log(self.idade)
  }/* .bind(this)*/, 1000)
}

new pessoa