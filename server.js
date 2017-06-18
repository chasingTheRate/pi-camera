const express = require('express');
const app = express();
var i2cBus = require("i2c-bus");

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
