angular.module("catalog", [])
    .controller("ProductCtrl",
        function ($scope, $routeParams, $http) {
            $http.get('json/catalog.json').success(function(data) {
                $scope.products = data.products;
                $scope.product = data.products[$routeParams.sku];
                console.log(JSON.stringify(data));
            });
        }
    ).config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home.html',
                controller: 'ProductCtrl'
            })
            .when('/product/:sku', {
                templateUrl: 'product.html',
                controller: 'ProductCtrl'
            })
            .otherwise({redirectTo: '/home'});
    }]);


