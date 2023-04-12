if (!Array.prototype.$flatMap) {
  Array.prototype.$flatMap = function(cb) {
    return this.map(cb).reduce((destino, array) => destino.concat(array), [])
  }
}