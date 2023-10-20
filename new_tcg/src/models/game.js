
export default class Game {
    constructor(config) {
        this.up = config.up;
        this.down = config.down;
        this.turn = this.up;
    }

    getTurn() {
        // to do
        return this.turn;
    }

    changeTurn() {
        // to do
        if (this.turn.type === this.up.type) {
            this.turn = this.down;
            return this.turn;
        } else {
            this.turn = this.up;
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