import BoardController from '../controllers/board';
import ModelFactory from './factory';
import Hand from './hand';
import Board from './board';
import Deck from './deck';
import Pawn from './pawn';
import Cemetary from './cemetary';

// import configFactory from './config';

export default class Player extends Pawn{

    constructor(config) {
        // TO BE TESTED
        super(10,10,10);
        //type human || type computer
        this.type = config.type;
        this.hand = new Hand({cards:[]});
        this.board = new Board({cards:[],limit:7});
        this.cemetary = new Cemetary({cards:[]});
        // this.deck = ModelFactory.get('deck');
        console.log("***",ModelFactory.get('deck'));
        // console.log("*",ModelFactory.get('deck') instanceof Deck);
        // console.log("-",ModelFactory.get('deck').draw());
        this.deck = new Deck(ModelFactory.get('deck'));
        // return this;
    }

  

    shuffle(type = "deck") {
        if (type === "deck") {
            return this.deck.shuffle();
        } else {
            return this.cemetary.shuffle();
        }
    }

    draw() {
        // console.log("**",ModelFactory);
        // console.log("--",this.hand);
        // console.log("****",this.deck);
        // console.log("*player calling draw function : ",this.deck.draw());
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
            this.cemetary.addCard(card);
            return true;
        } else {
            return false;
        }
    }

    attack(position, target) {
        // to be
        let card = this.board.cards.splice(position,0);
        if (typeof card == "object") {            
            let attack = card.attack.split("-");
            this.life = attack[0];
            this.strength = attack[1];
            this.defense = attack[2];
            this.attack(target);
        }
    }
}