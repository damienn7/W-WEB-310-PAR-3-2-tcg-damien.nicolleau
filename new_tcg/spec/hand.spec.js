import Hand from '../src/models/hand';

// npm test to run the test ;)

describe("Unit Test - tests de la couche métier", function () {
    var number = 0;
    var model;
    beforeEach(function () {
        number++;
        console.log("ModelTesting beginned [" + number + "]");
        model = new Hand({ "cards": [{ "face": "card-1" }, { "face": "card-2" }, { "face": "card-3" }, { "face": "card-4" }, { "face": "card-5" }, { "face": "card-6" }], "limit": 10 });
    });
    describe("Hand Test - testing methods", function () {
        beforeEach(function () {
            console.log("Testing function ...");
        });
        // TEST addCard()
        describe("addCard function ...", function () {
            beforeEach(function () {
                console.log("Calling addCard() ...");
            });
            it("Card added", function () {
                let result = model.addCard({ "face": "card-7" });
                expect(result).toBe(true);
                console.table(model.cards);
            });
            afterEach(function () {
                console.log("Call ended");
            });
        });

        // TEST removeCard()
        describe("removeCard function ...", function () {
            beforeEach(function () {
                console.log("Calling removeCard() ...");
            });
            it("Card removed", function () {
                model = new Hand({ "cards": [{ "face": "card-1" }, { "face": "card-2" }, { "face": "card-3" }, { "face": "card-4" }, { "face": "card-5" }, { "face": "card-6" }], "limit": 10 });
                let result = model.removeCard(4);
                console.log(result);
                expect(result).not.toBe(false);
                console.table(model.cards);
            });
            afterEach(function () {
                console.log("Call ended");
            });
        });

        // TEST getAllCards()
        describe("getAllCards function ...", function () {
            beforeEach(function () {
                console.log("Calling getAllCards() ...");
            });
            it("Cards got", function () {
                let result = model.getAllCards();
                expect(result).toEqual(model.cards);
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
            it("Cards count got", function () {
                let result = model.getCardsCount();
                expect(result).toEqual(model.cards.length);
                console.table("Cards count : "+result);
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