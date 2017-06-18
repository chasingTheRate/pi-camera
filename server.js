const express = require('express');
const app = express();
var i2c = require('i2c-bus'),
  i2c1 = i2c.openSync(1);

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
