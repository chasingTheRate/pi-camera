
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

    this.horizontalChannel = 0;
    this.verticalChannel = 3;

    this.horizontalPulseLength = 1500;
    this.verticalPulseLength = 1500;

    const a = this;
    this.pwm = new Pca9685Driver(options, function(err) {
      if (err) {
          console.error("Error initializing PCA9685");
          process.exit(-1);
      }
      console.log("Initialization done");
      a.setInitialPosition();
    });
    this.test = 'test';
  }

  setInitialPosition()
  {
    this.setChannelPulseLength(this.horizontalChannel, 1500);
    this.setChannelPulseLength(this.verticalChannel, 1500);
  };

  setChannelPulseLength(channel, pulseLength)
  {
    this.pwm.setPulseLength(channel, pulseLength);
  };

  panByStepIncrement(stepObj) // { horizontalIncrement : 10, verticalIncrement : 10 }
  {
    setChannelPulseLength(this.horizontalChannel, this.horizontalPulseLength + stepObj.horizontalIncrement);
    setChannelPulseLength(this.verticalChannel, this.verticalPulseLength + stepObj.verticalIncrement);
  }
}

exports.Driver = Driver;
