var express = require('express');
var app = express();
var mongoose = require('mongoose');
var userController = require('./users/userController.js');
var bodyParser = require('body-parser');
app.use(bodyParser());

//mongod uri mongodb://heroku_x47wsjz1:r76ua1mhvk2d4s9h77n8b3tkts@ds129469.mlab.com:29469/heroku_x47wsjz1

mongoose.connect('mongodb://localhost/mathcraft')

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we connected')
});

app.post('/', userController.signin);

app.get('/scores', userController.getUsers);

// app.get('/', function(req, res) {
//   console.log('hello')
//   res.send('Hello world')
// })

var port = process.env.PORT || 8000;
app.use(express.static(__dirname + '/../client'));
app.listen(port, function() {
  console.log('listening on port', port)
});