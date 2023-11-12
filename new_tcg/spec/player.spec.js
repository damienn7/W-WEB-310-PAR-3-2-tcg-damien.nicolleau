import Player from '../src/models/player';


// npm test to run the test ;)
describe("Player Test - testing methods", function () {
    var number = 0;
    var model;
    var modelC;
    beforeEach(function () {
        number++;
        console.log("ModelTesting beginned [" + number + "]");
        model = new Player({ type: "human",life: 10,strength: 10,def: 10 });
        modelC = new Player({ type: "computer",life: 10,strength: 10,def: 10 });
        console.table(model);
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

    // TEST shuffle()
    describe("shuffle function ...", function () {
        beforeEach(function () {
            console.log("Calling shuffle() ...");
        });
        it("Cards shuffled got for human side", function () {

            expect(model.shuffle()).toEqual(true);

            expect(model.shuffle("error")).toEqual(false);

            expect(model.shuffle("cemetary")).toEqual(true);

        });
        afterEach(function () {
            console.log("Call ended");
        });
    });

    // TEST playCard()
    describe("playCard function ...", function () {
        beforeEach(function () {
            console.log("Calling playCard() ...");
        });
        it("Card played got for human side", function () {

            let result = model.hand.addCard({ "face": "card-1" });
            console.log("Player model");
            console.log(model.hand, " result for addCard()", result);
            model.playCard(0);
            console.log(model.hand.getAllCards());
            expect(model.hand.getAllCards().length).toEqual(0);

        });
        afterEach(function () {
            console.log("Call ended");
        });
    });

    // TEST discard()
    describe("discard function ...", function () {
        beforeEach(function () {
            console.log("Calling discard() ...");
        });
        it("Discard got for human side", function () {

            let result = model.hand.addCard({ "face": "card-1" });
            console.log("Player model");
            console.log(model.hand, " result for addCard()", result);
            model.discard(0);
            expect(model.cemetary.getCardsCount()).not.toEqual(0);

        });
        afterEach(function () {
            console.log("Call ended");
        });
    });

    // TEST attack()
    describe("attack function ...", function () {
        beforeEach(function () {
            console.log("Calling attack() ...");
        });
        it("Attack got for human side", function () {

            let result = model.board.addCard({ "face": "card-1" });
            console.log("Player model");
            // console.log(model.board, " result for addCard()", result);
            model.attack(0,modelC);
            // console.log("wanna see the result",result);
            expect(modelC.life).not.toEqual(10);
            console.table(model);
            console.table(modelC);
        });
        afterEach(function () {
            console.log("Call ended");
        });
    });

    afterEach(function () {
        console.log("Testing function ended");
    });
});

