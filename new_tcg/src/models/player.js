import ModelFactory from './factory';
import Hand from './hand';
import Board from './board';
import Deck from './deck';
import Pawn from './pawn';
import Cemetary from './cemetary';

export default class Player extends Pawn {

    constructor(config) {
        // TO BE TESTED
        super(config.life, config.strength, config.def);
        //type human || type computer
        this.type = config.type;
        this.hand = new Hand({ cards: [] });
        this.board = new Board({ cards: [], limit: 7 });
        this.cemetary = new Cemetary({ cards: [] });
        this.deck = new Deck(ModelFactory.get('deck'));
        // return this;
    }



    shuffle(type = "deck") {
        if (type === "deck") {
            this.deck.shuffle();
            return true;
        } else if (type === "cemetary") {
            this.cemetary.shuffle();
            return true;
        } else {
            return false;
        }
    }

    draw() {
        return this.deck.draw();
    }

    playCard(position) {
        // to be
        let card = this.hand.removeCard(position);
        if (card !== false) {
            this.board.addCard(card);
            return true;
        } else {
            return false;
        }
    }

    discard(position) {
        // to be
        let card = this.hand.removeCard(position);
        if (card !== false) {
            this.cemetary.insertAt(card);
            return true;
        } else {
            return false;
        }
    }

    attack(position, target) {
        // to be
        let card = this.board.cards.splice(position, 0);
        if (typeof card == "object") {
            super.attack(target);
        }
    }
}