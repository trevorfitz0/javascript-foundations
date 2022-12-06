class Pirate {
    constructor(name, job) {
        this.name = name
        this.cursed = false
        this.booty = 0
        this.shipsRobbed = 0
        if(job === undefined) {
            this.job = 'scallywag'
        } else {
            this.job = job
        }
    }
    robShip(){
        if(this.shipsRobbed < 5){
            this.shipsRobbed += 1
            this.booty += 100
            return 'YAARRR!'
        } else {
            this.cursed = true
            return `ARG! I've been cursed!`
        }
    }
    liftCurse(){
        if(this.cursed === true) {
            this.booty -= 300
            this.cursed = false
            return 'Your curse has been lifted!'
        } else {
            return 'You don\'t need to lift a curse!'
        }
    }
}

module.exports = Pirate