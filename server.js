const express = require('express')
const app = express()
const makePwmDriver = require('adafruit-i2c-pwm-driver')
const pwmDriver = makePwmDriver({address: 0x40, device: '/dev/i2c-1'})

app.get('/', function (req, res) {
  res.send('Hello World!')
  pwmDriver.setPWMFreq(50)
  pwmDriver.setPWM(2) // channel, on , off 
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
