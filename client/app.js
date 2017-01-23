angular.module('mathApp',[])
.controller('MathController', function($scope, $location) {
  $scope.usrAnswer = '';

  //Generates random operator
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

  //Generates random expresssion
  $scope.random = function() {
    console.log($scope.answer)
    console.log(eval($scope.expression));
    $scope.answer == eval($scope.expression) ? $scope.response = 'true': $scope.response = 'false'
    $scope.expression = `${Math.floor(Math.random() * 12)} ${$scope.randomOp()} ${Math.floor(Math.random() * 12)}`
    $scope.answer = '';
  }


});