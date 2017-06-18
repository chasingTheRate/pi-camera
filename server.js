const express = require('express');
const app = express();
var i2c = require('i2c-bus')
var Pca9685Driver = require("pca9685").Pca9685Driver;

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
