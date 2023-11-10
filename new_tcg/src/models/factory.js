import models from './config';
// import $ from 'jquery';

// import { JSDOM } from "jsdom";

// let window = new JSDOM().window;

// let $ = require('jquery')(window);

// var $ = require('jquery');

var env = "prod";

export default {

    setEnv: function (paramEnv = 'prod') {
        env = paramEnv;
    },

    get: function (modelName, params = {}) {

        if (env === "test") {
            modelName = "mock" + modelName.substr(0,1).toUpperCase() + modelName.substr(1);
        }

        if (models[modelName]) {
            var configParams = JSON.parse(models[modelName].param),
                constructorParams = Object.assign({}, configParams, params);

                // console.log(constructorParams);
            var inst = Object.create(models[modelName].class.prototype);
            models[modelName].class.call(inst, constructorParams);
            return inst;
        } else {
            throw Error ("can't load model " + modelName);
        }
    }

}