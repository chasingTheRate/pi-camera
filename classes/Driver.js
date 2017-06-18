
'use strict';
var i2cBus = require('i2c-bus')
var Pca9685Driver = require("pca9685").Pca9685Driver;

class Driver {
  constructor() {
    const options = {
        i2c: i2cBus.openSync(1),
        address: 0x40,
        frequency: 50,
        debug: false
    };

    this.pwm = new Pca9685Driver(options, function(err) {
      if (err) {
          console.error("Error initializing PCA9685");
          process.exit(-1);
      }
      console.log("Initialization done");
    });
    this.test = 'test';
  }
}

exports.Driver = Driver;
