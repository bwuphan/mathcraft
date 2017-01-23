var express = require('express');
var app = express();


// app.get('/', function(req, res) {
//   console.log('hello')
//   res.send('Hello world')
// })

app.use(express.static(__dirname + '/../client'))
app.listen(process.env.port || 8000, function() {
  console.log('listening on port 8000')
});