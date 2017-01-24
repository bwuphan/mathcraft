var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {type: String},
  basic30: {type: String},
  basic60: {type: String},
  advanced30: {type: String},
  advanced60: {type: String}
});

module.exports = mongoose.model('User', userSchema);

