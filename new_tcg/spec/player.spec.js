// import Player from '../src/models/player';
import ModelFactory from '../src/models/factory';

// npm test to run the test ;)
describe("Pawn Test - testing methods", function () {
    beforeEach(function () {
        console.log("Testing function ...");
    });

    // TEST draw()
    describe("draw function ...", function () {
        beforeEach(function () {
            console.log("Calling draw() ...");
        });
        it("Draw got for human side", function () {
            let model = ModelFactory.get('player');
            // let modelHuman = new Player({ "type": "human", "life":70, "strength":80, "defense":30 });
            // let modelComputer = new Player({ type: "computer" });
            // let resultHuman = modelHuman.draw();
            // expect(typeof resultHuman).toEqual("obect");
            console.table(model);

            // let resultComputer = modelComputer.draw();
            // expect(typeof resultComputer).toEqual("obect");
            // console.table(resultComputer);
        });
        afterEach(function () {
            console.log("Call ended");
        });
    });

    afterEach(function () {
        console.log("Testing function ended");
    });
});

