import ModelFactory from './factory';

export default class Player {

    constructor(config) {
        // type human || type computer
        this.type = config.type;
        
        this.deck = ModelFactory.get('deck');
    }

    draw () {
        return this.deck.draw();
    }

    shuffle(type = "deck") {
        if (type === "deck") {
            return this.deck.shuffle();
        } else {
            return ModelFactory.get("cemetary").shuffle();
        }
    }

    playCard(position) {
        // to be
        
    }
    
    discard(position) {
        // to be
    }

    attack(position, target) {
        // to be
    }
}