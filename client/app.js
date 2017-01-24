angular.module('mathApp',[])
.controller('MathController', function($scope, $location, $timeout) {
  $scope.usrAnswer = '';
  $scope.time = 60;
  $scope.score = 0;
  $scope.start = false;
  //Timer function
  $scope.timerStart = function() {
    //inner function decrements time
    var decTime = function() {
      $scope.time--;
      if($scope.time < 1) {
        $scope.start = false;
      }
      $timeout(decTime, 1000);
    }
    $scope.start = true;
    console.log($scope.start);
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
  $scope.randomOp = function() {
    var randNum = Math.random();
    if(randNum > .5) {
      return "+"
    } else {
      return "-"
    }
  }

  //initialized random expression
  $scope.expression = `${Math.floor(Math.random() * 12)} ${$scope.randomOp()} ${Math.floor(Math.random() * 12)}`
  $scope.check = true
  //Generates random expresssion
  $scope.random = function() {
    console.log('in here')
    $scope.usrAnswer == eval($scope.expression) ? $scope.check = true : $scope.check = false;
    $scope.check === true ? $scope.incScore() : $scope.decScore();
    $scope.expression = `${Math.floor(Math.random() * 12)} ${$scope.randomOp()} ${Math.floor(Math.random() * 12)}`
    $scope.usrAnswer = '';
  }


});