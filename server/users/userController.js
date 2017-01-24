// var User = require('./userModel');
// var bodyParser = require('body-parser');
// var Promise = require('bluebird')


// module.exports = {
//   signin: function(req, res, next) {
//     console.log('body here', req.body)
//     var username = 'anonymous';
//     if(req.body.username) {
//       username = req.body.username
//     }
//     var highscore = req.body.highscore;
//     User.findOne({username: username})
//       .exec(function(err, user) {
//         if(!user) {
//           console.log('username ', username)
//           console.log('highscore ', highscore)
//           var newUser = new User({
//             username: username,
//             highscore: highscore
//           });
//           newUser.save(function(err, newUser) {
//             if(err) {
//               console.log('error here');
//               res.status(500).send(err);
//             }
//           });
//         } else {
//           if(user.highscore < highscore) {
//             user.highscore = highscore;
//           }
//         }
//       });
//   },
//   getUsers: function(req, res, next) {
//     User.find({}).exec(function(err, users) {
//       res.status(200).send(users);
//     });
//   }
// }