import Game from '../src/models/game';

// npm test to run the test ;)
describe("Player Test - testing methods", function () {
    var number = 0;
    var model;
    var modelC;
    beforeEach(function () {
        number++;
        console.log("ModelTesting beginned [" + number + "]");
        model = new Game({ type: "human" });
        modelC = new Game({ type: "computer" });
        // console.table(model);
    });
    // TEST draw()
    describe("draw function ...", function () {
        beforeEach(function () {
            console.log("Calling draw() ...");
        });
        it("Draw got for human side", function () {

            expect(model.draw().face).toEqual("card-1");

        });
        afterEach(function () {
            console.log("Call ended");
        });
    });

    afterEach(function () {
        console.log("Testing function ended");
    });
});

