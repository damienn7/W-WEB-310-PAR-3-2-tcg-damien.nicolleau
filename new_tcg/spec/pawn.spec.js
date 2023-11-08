import Pawn from '../src/models/pawn';

// import Player from '../src/models/player';

// npm test to run the test ;)

describe("Unit Test - tests de la couche métier", function () {
    var number = 0;
    var model;
    beforeEach(function () {
        number++;
        console.log("ModelTesting beginned [" + number + "]");
        model = new Pawn(20, 30, 10);
    });
    describe("Pawn Test - testing methods", function () {
        beforeEach(function () {
            console.log("Testing function ...");
        });
        // TEST getLife()
        describe("getLife function ...", function () {
            beforeEach(function () {
                console.log("Calling getLife() ...");
            });
            it("Life got", function () {
                let result = model.getLife();
                expect(result).toEqual(model.life);
                console.table(result);
            });
            afterEach(function () {
                console.log("Call ended");
            });
        });

        
        // TEST getStrength()
        describe("getStrength function ...", function () {
            beforeEach(function () {
                console.log("Calling getStrength() ...");
            });
            it("Strength got", function () {
                let result = model.getStrength();
                expect(result).toEqual(model.strength);
                console.table(result);
            });
            afterEach(function () {
                console.log("Call ended");
            });
        });

        // TEST getDef()
        describe("getDef function ...", function () {
            beforeEach(function () {
                console.log("Calling insertAt() ...");
            });
            it("Def got", function () {
                let result = model.getDef();
                expect(result).toEqual(model.def);
                console.table(result);
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
            it("attack did", function () {
                let target = new Pawn(80, 60, 20);
                console.log("life before attack");
                console.log("model");
                console.table(model);
                console.log("target");
                console.table(target);
                let equality = target.life - model.strength;
                model.attack(target);
                expect(target.life).toEqual(equality);
                console.log("life after attack");
                console.log("model");
                console.table(model);
                console.log("target");
                console.table(target);
            });
            afterEach(function () {
                console.log("Call ended");
            });
        });

        // // TEST getLife()
        // describe("getLife function ...", function () {
        //     beforeEach(function () {
        //         console.log("Calling getLife() ...");
        //     });
        //     it("Life got", function () {
        //         model = new Player({type: 'human'});
        //         console.table(model);
        //     });
        //     afterEach(function () {
        //         console.log("Call ended");
        //     });
        // });

        afterEach(function () {
            console.log("Testing function ended");
        });
    });

    afterEach(function () {
        console.log("Model Testing ended [" + number + "]");
    });
});