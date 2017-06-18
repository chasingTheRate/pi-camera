const express = require('express');
const app = express();
var i2cBus = require('i2c-bus')
var Pca9685Driver = require("pca9685").Pca9685Driver;

var options = {
    i2c: i2cBus.openSync(1),
    address: 0x40,
    frequency: 50,
    debug: false
};

pwm = new Pca9685Driver(options, function(err) {
    if (err) {
        console.error("Error initializing PCA9685");
        process.exit(-1);
    }
    console.log("Initialization done");

    // Set channel 0 to turn on on step 42 and off on step 255
    // (with optional callback)
    pwm.setPulseRange(0, 42, 255, function() {
        if (err) {
            console.error("Error setting pulse range.");
        } else {
            console.log("Pulse range set.");
        }
    });

    // Set the pulse length to 1500 microseconds for channel 2
    pwm.setPulseLength(0, 600);
    pwm.setPulseLength(3, 600);

    // Set the duty cycle to 25% for channel 8
    pwm.setDutyCycle(8, 0.25);

    // Turn off all power to channel 6
    // (with optional callback)
    pwm.channelOff(0, function() {
        if (err) {
            console.error("Error turning off channel.");
        } else {
            console.log("Channel 0 is off.");
        }
    });

    pwm.channelOff(3, function() {
        if (err) {
            console.error("Error turning off channel.");
        } else {
            console.log("Channel 3 is off.");
        }
    });

    // Turn on channel 3 (100% power)
    //pwm.channelOn(3);
});

app.get('/', function (req, res) {
  res.send('Center')
  pwm.setPulseLength(0, 1500);
})

app.get('/left', function (req, res) {
  res.send('Left')
  pwm.setPulseLength(0, 600);
})

app.get('/right', function (req, res) {
  res.send('Right')
  pwm.setPulseLength(0, 2500);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
