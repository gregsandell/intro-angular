angular.module("catalog").controller("ProductCtrl",
    function ($scope, $routeParams, $http) {
         $http.get('json/catalog.json').success(function(data) {
             $scope.skus = data.skus;
             $scope.products = data.products;
             $scope.product = data.products[$routeParams.sku];
             console.log(JSON.stringify(data));
         });
    }
);
