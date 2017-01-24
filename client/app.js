angular.module('mathApp',[])
.controller('MathController', function($scope, $location, $http, $timeout) {
  $scope.usrAnswer = 'hello';
  $scope.time = 60;
  $scope.score = 0;
  $scope.start = false;
  $scope.scoresBasic60;
  $scope.scoresBasic30;
  $scope.scoresAdvanced60;
  $scope.scoresAdvanced30;
  $scope.username = '';
  $scope.selectedMode = 'basic60';
  //modes for game
  var modes = {
    basic60: {
      time: 60,
      difficulty: 1
    },
    basic30: {
      time: 30,
      difficulty: 1
    },
    advanced60: {
      time: 60,
      difficulty: 2
    },
    advanced30: {
      time: 30,
      difficulty: 2
    }
  }

  $scope.modes = ['basic60', 'basic30', 'advanced60', 'advanced30'];

  //This function filters the data by mode and sorts by high score
  var filterMode = function(data, modeString) {
    return data.sort(function(a, b){
      return parseFloat(b.highscore) - parseFloat(a.highscore);
    }).filter(function(entry) {
      if(entry.mode === modeString){
        console.log('mode here ' + entry.mode + ' ' + modeString);
        return entry;
      }
    }).map(function(entry) {
      return {highscore : entry.highscore, username : entry.username};
    });
  }

  $http({
    method:'GET',
    url: '/scores'
  })
  .then(function(resp){
    console.log(resp.data)
    $scope.scoresBasic60 = filterMode(resp.data, 'basic60');
    $scope.scoresBasic30 = filterMode(resp.data, 'basic30');
    $scope.scoresAdvanced60 = filterMode(resp.data, 'advanced60');
    $scope.scoresAdvanced30 = filterMode(resp.data, 'advanced30');
    console.log($scope.scoresBasic60)
  });
  //Timer function
  $scope.timerStart = function() {
    $scope.time = modes[$scope.selectedMode].time;
    //inner function decrements time
    var decTime = function() {
      $scope.time--;
      if($scope.time < 1) {
        $scope.start = false;
        $http({
          method: 'POST',
          url: '/',
          data: JSON.stringify({username: $scope.username, highscore: $scope.score, mode: $scope.selectedMode})
        })
        return;
      }
      $timeout(decTime, 1000);
    }
    $scope.start = true;

    $scope.score = 0;
    decTime();
  }

  $scope.incScore = function() {
    $scope.score += 100;
  }

  $scope.decScore = function() {
    $scope.score -= 100;
  }

  // Generates random operator
  $scope.randomOp = function(difficulty) {
    var randNum = Math.random();
    if(difficulty === 1){
      if(randNum > .5) {
        return "+";
      } else {
        return "-";
      }
    } else if (difficulty === 2){
      if(randNum > .66) {
        return "*";
      } else if (randNum < .66 && randNum > .33) {
        return "+";
      } else {
        return "-";
      }
    }
  }

  //initialized random expression
  $scope.expression = `${Math.floor(Math.random() * 12)} ${$scope.randomOp(modes[$scope.selectedMode].difficulty)} ${Math.floor(Math.random() * 12)}`
  $scope.check = true
  //Generates random expresssion
  $scope.random = function() {
    console.log('usrAnswer : ' + $scope.usrAnswer + ' x '  + eval($scope.expression));
    $scope.usrAnswer == eval($scope.expression) ? $scope.check = true : $scope.check = false;
    $scope.check === true ? $scope.incScore() : $scope.decScore();
    $scope.expression = `${Math.floor(Math.random() * 12)} ${$scope.randomOp(modes[$scope.selectedMode].difficulty)} ${Math.floor(Math.random() * 12)}`
    $scope.usrAnswer = '';
  }

  // var ajaxRequests = function() {
  //   console.log($scope.username)
  //   $http({
  //     method: 'POST',
  //     url: '/',
  //     data: JSON.stringify({username: $scope.username, highscore: $scope.score})
  //   })
  //   .then(function(){
  //     $http({
  //       method:'GET',
  //       url: '/scores'
  //     })
  //     .then(function(resp){
  //       $scope.data = resp.data.sort(function(a, b){
  //         return parseFloat(b.highscore) - parseFloat(a.highscore);
  //       }).map(function(object) {
  //         return {highscore : object.highscore, username : object.username};
  //       })
  //     })
  //   })
  // };

});