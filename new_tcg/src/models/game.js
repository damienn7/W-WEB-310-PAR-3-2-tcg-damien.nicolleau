import EventManager from "../eventManager";

export default class Game extends EventManager{
    constructor(config) {
        super();
        this.up = config.up;
        this.down = config.down;
        this.turn = "up";
    }

    getTurn() {
        // to do
        if ("up") {
            return {up:this.up,turn:"up"};
        } else {
            return {down:this.down,turn:"down"};
        }
    }

    changeTurn() {
        // to do
        if (this.turn === "up") {
            this.turn = "down";
            return this.turn;
        } else {
            this.turn = "up";
            return this.turn;
        }
    }

    proxy(side, action, payload) {
        // to do
        let result;
        try {
            result = side[action](payload);
        } catch (error) {
            return false;
        }
        return result;
    }
}