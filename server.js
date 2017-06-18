const express = require('express');
const app = express();
var i2cBus = require('i2c-bus')
var Pca9685Driver = require("pca9685").Pca9685Driver;

var options = {
    i2c: i2cBus.openSync(1),
    address: 0x40,
    frequency: 60,
    debug: false
};

pwm = new Pca9685Driver(options, function(err) {
    if (err) {
        console.error("Error initializing PCA9685");
        process.exit(-1);
    }
    console.log("Initialization done");
});

app.get('/left', function (req, res) {
  res.send('left')
  pwm.setPulseLength(0, 600);
})

app.get('/right', function (req, res) {
  res.send('right')
  pwm.setPulseLength(0, 250);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
