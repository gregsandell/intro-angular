angular.module('myapp').directive('transcludeMe', function($compile) {
    return {
        restrict: 'E',
        template: "<div>The answer, my friend,<div ng-transclude></div>the answer is blowin' in the wind</div>",
        replace: true,
        transclude: true
    };
});

