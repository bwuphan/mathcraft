var User = require('./userModel');
var bodyParser = require('body-parser');
var Promise = require('bluebird')


module.exports = {
  signin: function(req, res, next) {
    console.log('body here', req.body)
    var username = 'anonymous';
    var highscore = req.body.highscore;
    var mode = req.body.mode;
    if(req.body.username) {
      username = req.body.username
    }
    User.findOne({username: username})
      .exec(function(err, user) {
        if(!user) {
          console.log('username ', username)
          console.log('highscore ', highscore)
          var newUser = new User({
            username: username,
            basic30: null,
            basic60: null,
            advanced30: null,
            advanced60: null
          });
          newUser[mode] = highscore;
          newUser.save(function(err, newUser) {
            if(err) {
              console.log('error here');
              res.status(500).send(err);
            }
          });
        } else {
          console.log(JSON.stringify(user))
          if(user[mode]){
            console.log('nested user ' + user[mode] + " highscore " + highscore);
            if(highscore > user[mode]){
              console.log('nested ' + user[mode] + " " + highscore)
              user[mode] = highscore;
            }
          } else {
            user[mode] = highscore;
            console.log('else user mode is ' + user[mode])
          }
          user.save(function(err, newUser) {
            if(err) {
              console.log('error here');
              res.status(500).send(err);
            }
          });
        }
      });
  },
  getUsers: function(req, res, next) {
    User.find({}).exec(function(err, users) {
      res.status(200).send(users);
    });
  }
}