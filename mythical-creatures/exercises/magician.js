class Magician {
    constructor(specs) {
        this.name = `The Great ${specs.name}`
        this.assistant = specs.assistant
        this.confidencePercentage = 10
        if(specs.clothing === undefined) {
            this.favoriteAccessory = 'top hat'
        } else {
            this.favoriteAccessory = specs.clothing
        }
    }
    performIncantation(phrase){
        if(phrase === 'abracadabra') {
            return 'ABRACADABRA!'
        } else if (phrase === 'allakazaam') {
            return 'ALLAKAZAAM!'
        }
    }
    performTrick(){
        this.confidencePercentage += 10
        if(this.favoriteAccessory === 'top hat') {
            return 'PULL RABBIT FROM TOP HAT'
        } else if (this.favoriteAccessory === 'cape') {
            return 'PULL DOVE FROM SLEEVE'
        }
    }
    performShowStopper() {
        if(this.confidencePercentage > 100 && this.assistant === true) {
            return 'WOW! The magician totally just sawed that person in half!'
        } else {
            return 'Oh no, this trick is not ready!'
        }
    }
}

module.exports = Magician