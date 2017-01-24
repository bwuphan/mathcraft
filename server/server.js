var express = require('express');
var app = express();
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/mathcraft')


// app.get('/', function(req, res) {
//   console.log('hello')
//   res.send('Hello world')
// })
var port = process.env.PORT || 8000;
app.use(express.static(__dirname + '/../client'));
app.listen(port, function() {
  console.log('listening on port', port)
});