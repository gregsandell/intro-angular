describe('FirstLastCtrl function', function() {

describe('FirstLastCtrl', function() {
  var $scope;

  beforeEach(function() {
    module('firstLast');
    inject(function($rootScope, $controller) {
      $scope = $rootScope.$new();
      $controller('FirstLastCtrl', {$scope: $scope});
    })
  });

  it('should set the value "Greg Sandell"', function() {
    $scope.firstName = "Greg";
    $scope.lastName = "Sandell";
    expect($scope.getName()).toBe('Greg Sandell');
  });
});
});

