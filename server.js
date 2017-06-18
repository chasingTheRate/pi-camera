const express = require('express');
const app = express();
const { Driver } = require('./classes/Driver.js');

let driver = new Driver();
console.log(driver.test);
// var options = {
//     i2c: i2cBus.openSync(1),
//     address: 0x40,
//     frequency: 50,
//     debug: false
// };
//
// pwm = new Pca9685Driver(options, function(err) {
//     if (err) {
//         console.error("Error initializing PCA9685");
//         process.exit(-1);
//     }
//     console.log("Initialization done");
//
//     // Set the duty cycle to 25% for channel 8
//     pwm.setDutyCycle(8, 0.25);
//
//     // Turn off all power to channel 6
//     // (with optional callback)
//     pwm.channelOff(0, function() {
//         if (err) {
//             console.error("Error turning off channel.");
//         } else {
//             console.log("Channel 0 is off.");
//         }
//     });
//
//     pwm.channelOff(3, function() {
//         if (err) {
//             console.error("Error turning off channel.");
//         } else {
//             console.log("Channel 3 is off.");
//         }
//     });
//
//     // Turn on channel 3 (100% power)
//     //pwm.channelOn(3);
// });

app.get('/', function (req, res) {
  res.send('Center')
})

app.get('/right', function (req, res) {
  res.send('Right')
  driver.setChannelPulseLength(0, 600);
})

app.get('/left', function (req, res) {
  res.send('Left')
  driver.setChannelPulseLength(0, 2500);
})

app.get('/up', function (req, res) {
  res.send('up')
  driver.setChannelPulseLength(3, 1000);
})

app.get('/down', function (req, res) {
  res.send('Down')
  driver.setChannelPulseLength(0, 2500);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
