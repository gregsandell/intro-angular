'use strict';

/* Controllers */

function calcCtrl($scope) {

    // Initial values
    $scope.hoursOfStore = '8';
    $scope.numberOfEmployees = '3';
    $scope.processingTimePerPhone = '25';
    $scope.grossSalePerPhone = '200';
    $scope.hourlyWagePerEmployee = '15';
    $scope.costPerPhone = '150';
    $scope.dailyStoreLease = '200';

    $scope.phonesSoldPerPersonPerHour = function() {
        return 60/f($scope.processingTimePerPhone);
    };

    $scope.phonesSoldPerDay = function() {
        return f($scope.hoursOfStore) * f($scope.numberOfEmployees) * $scope.phonesSoldPerPersonPerHour();
    };
        
    $scope.totalGrossPerDay = function() {
        return $scope.phonesSoldPerDay() * f($scope.grossSalePerPhone);
    };
        
    $scope.operatingCostPerDay = function() {
        return (f($scope.hoursOfStore) * f($scope.numberOfEmployees) * f($scope.hourlyWagePerEmployee)) +
            ($scope.phonesSoldPerDay() * f($scope.costPerPhone)) +
            f($scope.dailyStoreLease);
    };
        
    $scope.netProfit = function() {
        return $scope.totalGrossPerDay() - $scope.operatingCostPerDay();
    };


    var i = function(val) {
        return isNaN(parseInt(val)) ? 0 : parseInt(val);
    };

    var f = function(val) {
        return isNaN(parseFloat(val)) ? 0.0 : parseFloat(val);
    };

};
