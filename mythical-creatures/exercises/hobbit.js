class Hobbit {
    constructor(name) {
        this.name = name.name
        this.age = 0
        this.child = false
        this.adult = false
        this.old = false
        this.hasRing = false
    }
    celebrateBirthday() {
        
        this.age += 1

        if(this.age <= 32) {
            this.child = true
        } else if(this.age >= 33 && this.age < 101){
            this.adult = true
        } else if(this.age >= 101){
            this.old = true
        }
        }
    getRing() {
        if(this.name === 'Frodo') {
            this.hasRing = true
            return `Here is the ring!`
        } else {
            return `You can't have it!`
        }
    }
    }

module.exports = Hobbit

console.log()