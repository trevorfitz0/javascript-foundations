class Unicorn {
  constructor(name, color) {

if(color === undefined){
  this.color = 'white'
} else {
  this.color = color;
}
    this.name = name;
  }
  isWhite() {
    if(this.color === 'white') {
      return true 
    } else {
      return false
    }
  }
  says(phrase) {
    return(`**;* ${phrase} *;**`)
  }
}

module.exports = Unicorn;
