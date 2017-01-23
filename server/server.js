var express = require('express');
var app = express();


app.get('/', function(req, res) {
  console.log('hello')
  res.send('Hello world')
})

app.listen(process.env.port || 8000, function() {
  console.log('listening on port 8000')
});