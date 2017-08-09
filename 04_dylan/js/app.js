angular.module('myapp', [])
    .directive('bobDylan', function($compile) {
        return {
            restrict: 'E',
            template: "<div>The answer, my friend,<div ng-transclude></div>the answer <div ng-transclude></div></div>",
            replace: true,
            transclude: true
        };
    });

