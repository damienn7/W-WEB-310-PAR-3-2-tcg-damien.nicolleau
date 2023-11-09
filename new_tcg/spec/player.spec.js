import Player from '../src/models/player';
import jQuery from 'jquery';

// npm test to run the test ;)
describe("Player Test - testing methods", function () {
    var number = 0;
    var model;
    beforeEach(function () {
        number++;
        console.log("ModelTesting beginned [" + number + "]");
        (function( jQuery ){
            model = new Player({type:"human"});
        })( jQuery );
        console.table(model);
    });
    // TEST draw()
    describe("draw function ...", function () {
        beforeEach(function () {
            console.log("Calling draw() ...");
        });
        it("Draw got for human side", function () {

            // model = new Player({type:"human"});

            // let modelHuman = new Player({ "type": "human", "life":70, "strength":80, "defense":30 });
            // let modelComputer = new Player({ type: "computer" });
            // let resultHuman = modelHuman.draw();
            console.log("Is there an error ?")
            expect(model.face).toEqual();
            // console.table(model);

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

