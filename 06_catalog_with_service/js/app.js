angular.module("catalog", [])
    .service('CatalogData', function() {
        return {
            "products": {
                "ABC123": {
                    "name": "Black & Decker TR1400SB 4-Slice Stainless-Steel Toaster",
                    "price": "35",
                    "features": ["Toast 4 slices at a time",
                        "Dual independent controls", "Bagel Mode"
                    ]
                },
                "DEF456": {
                    "name": "Kindle Fire HD",
                    "price": "199",
                    "features": ["7 inch HD Display", "Dolby Audio",
                        "Dual-Band Dual-Antenna Wi-Fi", "16GB or 32GB"
                    ]
                },
                "GHI789": {
                    "name": "Beats Studio Over-Ear Headphone (Pink)",
                    "price": "299",

                    "features": ["Keeps background noise way back",
                        "Extra comfortable ear cups", "A flawless and iconic fit",
                        "In-line control"
                    ]
                }
            }
        };
    }).controller("ProductCtrl", function ($scope, $routeParams, $http, CatalogData) {
            $scope.products = CatalogData.products;
            $scope.product = CatalogData.products[$routeParams.sku];
            console.log(JSON.stringify(CatalogData));
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


