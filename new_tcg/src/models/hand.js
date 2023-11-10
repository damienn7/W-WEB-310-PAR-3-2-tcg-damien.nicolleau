
export default class Hand {
    constructor (config) {
        this.cards = config.cards;
        this.limit = ("limit" in config) ? config.limit : 7;
    }

    addCard(card) {
        if (typeof card === "object") {
            this.cards.push(card);
            return true;
        } else {
            return false;
        }
    }

    removeCard(position) {
        if (typeof position === "number" && position < this.cards.length) {
            return this.cards.splice(position,position+1);
        } else {
            return false;
        }
    }

    getAllCards() {
        return this.cards;
    }

    getCardsCount() {
        return this.cards.length;
    }
}