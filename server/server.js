var express = require('express');
var app = express();


// app.get('/', function(req, res) {
//   console.log('hello')
//   res.send('Hello world')
// })
var port = process.env.port || 8000
app.use(express.static(__dirname + '/../client'));
app.listen(port, function() {
  console.log('listening on port', port)
});