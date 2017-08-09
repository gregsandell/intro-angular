angular.module("firstLast", []).controller("FirstLastCtrl", function($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.getName = function() {
      return $scope.firstName + " " + $scope.lastName;
    };
});

