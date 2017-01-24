var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {type: String},
  highscore: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);

