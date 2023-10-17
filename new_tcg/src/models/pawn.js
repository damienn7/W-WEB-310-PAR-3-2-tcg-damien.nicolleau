import EventManager from "../eventManager";

export default class Pawn extends EventManager {
    constructor (life, strength, def) {
        this.life = life; // état de vie
        this.strength = strength; // force
        this.def = def; // défense
    }
    
    getLife() {
        return this.life;
    }

    getStrength() {
        return this.strength;
    }

    getDef() {
        return this.def;
    }

    attack(target) {
        target.receiveAttack(this);
    }

    receiveAttack(opponent, strikeBack = false) {
        if (strikeBack === false) {
            this.life = (this.getLife() - opponent.getStrength() < 0)?0:this.getLife() - opponent.getStrength();
            opponent.receiveAttack(this,true);
        } else {
            this.life = (this.getLife() - opponent.getStrength() < 0)?0:this.getLife() - opponent.getStrength();
        }
    }
}