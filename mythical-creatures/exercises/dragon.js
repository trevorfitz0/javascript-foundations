
class Dragon {
    constructor(name, rider) {
        this.name = name
        this.rider = rider
        this.timesAte = 0
        this.hungry = true
    }
    greet() {
        return(`Hi, ${this.rider}!`)
    }
    eat() {
        this.timesAte += 1
        if( this.timesAte < 3) {
            this.hungry = true
        } else {
            this.hungry = false
        }
        return this.hungry
    }
}

module.exports = Dragon;