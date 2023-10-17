import Deck from '../src/models/deck';

// npm test to run the test ;)

describe("Unit Test - tests de la couche métier", function () {
    var number = 0;
    var model;
    beforeEach(function () {
        number++;
        console.log("ModelTesting beginned [" + number + "]");
        model = new Deck({ "cards": [{ "face": "card-1" }, { "face": "card-2" }, { "face": "card-3" }, { "face": "card-4" }, { "face": "card-5" }, { "face": "card-6" }] });
    });
    describe("Desk Test - testing methods", function () {
        beforeEach(function () {
            console.log("Testing function ...");
        });
        // TEST - shuffle()
        describe("Shuffle function ...", function () {
            beforeEach(function () {
                console.log("Calling shuffle() ...");
            });
            it("Cards are shuffled", function () {
                console.log('Cards before shuffle() :');
                console.table(model.cards);
                let result = model.shuffle();
                expect(result).toBe(true);
                console.log('Cards after shuffle() :');
                console.table(model.cards);
            });
            afterEach(function () {
                console.log("Method testing ended!");
            });
        });
        // TEST insertAt()
        describe("insertAt function ...", function () {
            beforeEach(function () {
                console.log("Calling insertAt() ...");
            });
            it("Cards are inserted", function () {
                console.log('Cards before insertAt() :');
                console.table(model.cards);
                let pos = model.insertAt({ "face": "card-2.5" }, 2);
                console.log(pos);
                expect(JSON.stringify(model.cards[model.cards.length - 1])).not.toBe(JSON.stringify({ "face": "card-2.5" }));
                console.log('Cards after insertAt() with position :');
                console.table(model.cards);
                model.insertAt({ "face": "card-2.5" });
                expect(JSON.stringify(model.cards[model.cards.length - 1])).toBe(JSON.stringify({ "face": "card-2.5" }));
                console.log('Cards after insertAt() without position :');
                console.table(model.cards);
            });
            afterEach(function () {
                console.log("Call ended");
            });
        });

        // TEST insertAt()
        describe("draw function ...", function () {
            beforeEach(function () {
                console.log("Calling insertAt() ...");
            });
            it("Card drawed", function () {
                let result = model.draw();
                expect(result).not.toBe(false);
                console.log(JSON.stringify(result));
                console.table(model.cards);
            });
            afterEach(function () {
                console.log("Call ended");
            });
        });

        // TEST getCardsCount()
        describe("getCardsCount function ...", function () {
            beforeEach(function () {
                console.log("Calling getCardsCount() ...");
            });
            it("Cards count", function () {
                let result = model.getCardsCount();
                expect(result).toBe(model.cards.length);
                console.log('Length : ' + result);
            });
            afterEach(function () {
                console.log("Call ended");
            });
        });
        afterEach(function () {
            console.log("Testing function ended");
        });
    });

    afterEach(function () {
        console.log("Model Testing ended [" + number + "]");
    });
});