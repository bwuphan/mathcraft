var express = require('express');
var app = express();
var mongoose = require('mongoose');
var userController = require('./users/userController.js');
var bodyParser = require('body-parser');
app.use(bodyParser());

mongoose.connect('mongodb://localhost/mathcraft')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we connected')
});

app.post('/', userController.signin);

// app.get('/', userController.getUsers);

// app.get('/', function(req, res) {
//   console.log('hello')
//   res.send('Hello world')
// })

var port = process.env.PORT || 8000;
app.use(express.static(__dirname + '/../client'));
app.listen(port, function() {
  console.log('listening on port', port)
});