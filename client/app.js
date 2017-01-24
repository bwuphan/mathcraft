angular.module('mathApp',[])
.controller('MathController', function($scope, $location, $timeout) {
  $scope.usrAnswer = '';
  $scope.time = 60;

  //Timer function
  $scope.timerStart = function() {
    $scope.time--;
    $timeout($scope.timerStart, 1000);

    console.log($scope.time)
  }

  // $scope.counter = 0;
  //   $scope.onTimeout = function(){
  //       $scope.counter++;
  //       mytimeout = $timeout($scope.onTimeout,1000);
  //   }
  //   var mytimeout = $timeout($scope.onTimeout,1000);

  //   $scope.stop = function(){
  //       $timeout.cancel(mytimeout);
  //   }
  // }
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
    $scope.usrAnswer == eval($scope.expression) ? $scope.check = 'true': $scope.check = 'false'
    $scope.expression = `${Math.floor(Math.random() * 12)} ${$scope.randomOp()} ${Math.floor(Math.random() * 12)}`
    $scope.answer = '';
  }


});