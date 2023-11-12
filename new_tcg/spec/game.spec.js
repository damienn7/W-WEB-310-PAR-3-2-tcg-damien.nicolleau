import Game from '../src/models/game';
import Player from '../src/models/player';

// npm test to run the test ;)
describe("Game Test - testing methods", function () {
    var number = 0;
    var game;
    beforeEach(function () {
        number++;
        console.log("ModelTesting beginned [" + number + "]");
        let computer = new Player({type:"computer"});
        let human = new Player({type:"human"});
        game = new Game({ up: human, down: computer });

        // console.table(game);
    });
    // TEST getTurn()
    describe("getTurn function ...", function () {
        beforeEach(function () {
            console.log("Calling getTurn() ...");
        });
        it("Turn got for human side", function () {

            console.log("Is my turn ?")
            console.table(game.getTurn());
            expect(game.getTurn().turn).toEqual("up");

        });
        afterEach(function () {
            console.log("Call ended");
        });
    });

    afterEach(function () {
        console.log("Testing function ended");
    });
});

