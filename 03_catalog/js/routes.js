'use strict';
angular.module('catalog').
    config(['$routeProvider', function($routeProvider) {
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

