angular.module('calculator', [])
    .directive('calc', function($compile) {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                var html = "<div class='row-fluid" + (attrs.type == 'calc' ? " val" : "") + "'>";
                var title = attrs.item.camelToProper();
                html += "<div class='span5 title'>" + title + "</div><div class='span2'>";
                if (attrs.type == 'input') {
                    html += "<input ng-model='" + attrs.item + "' size='3'>";
                } else {
                    var filter = "number:1";
                    if (attrs.unit == "dollars") {
                        filter = "currency:'$'";
                    }
                    html += "{{" + attrs.item + "() | " + filter + "}}";
                }
                html += "</div><div class='span5'>" + attrs.unit;
                html += "</div>";
                element.append($compile(html)(scope));
            }
        }
    }).controller("calcCtrl",
        function ($scope) {
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

            var f = function(val) {
                return isNaN(parseFloat(val)) ? 0.0 : parseFloat(val);
            };
        }
);


String.prototype.camelToProper = function () {
    if (this == null || this == "") {
        return this;
    }
    var newText = "";
    var characters = this.split("");
    characters[0] = characters[0].toUpperCase();
    for (var i = 0; i < characters.length; i++) {
        if (characters[i] == characters[i].toUpperCase() && i != 0
            && !(characters[i + 1] == characters[i + 1].toUpperCase())
            && characters[i - 1] != " ") {
            newText += " ";
        }
        newText += characters[i];
    }

    return newText;
}
