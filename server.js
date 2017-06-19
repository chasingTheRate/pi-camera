const express = require('express');
const app = express();
const { Driver } = require('./classes/Driver.js');

let driver = new Driver();

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
  driver.setChannelPulseLength(3, 2500);
})

app.post('/test', function (req, res) {
  console.log('test');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
