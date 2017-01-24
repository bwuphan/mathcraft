angular.module('mathApp',[])
.controller('MathController', function($scope, $location) {
  $scope.usrAnswer = '';

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
    console.log($scope.answer)
    console.log(eval($scope.expression));
    $scope.usrAnswer == eval($scope.expression) ? $scope.check = 'true': $scope.check = 'false'
    $scope.expression = `${Math.floor(Math.random() * 12)} ${$scope.randomOp()} ${Math.floor(Math.random() * 12)}`
    $scope.answer = '';
  }


});