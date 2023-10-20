import BoardController from '../controllers/board';
import ModelFactory from './factory';
import Hand from './hand';
import Board from './board';
import Pawn from './pawn';
import Cemetary from './cemetary';

export default class Player extends Pawn {

    constructor(config) {
        // TO BE TESTED
        super();
        // type human || type computer
        this.type = config.type;
        this.hand = ModelFactory.get("hand");
        this.board = new Board();
        this.cemetary = new Cemetary();
        this.deck = ModelFactory.get('deck');
    }

    draw () {
        return this.deck.draw();
    }

    shuffle(type = "deck") {
        if (type === "deck") {
            return this.deck.shuffle();
        } else {
            return this.cemetary.shuffle();
        }
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
            this.cemetary.addCard(card);
            return true;
        } else {
            return false;
        }
    }

    attack(position, target) {
        // to be
        let card = this.board.cards.splice(position,0);
        this.attack(target);
    }
}