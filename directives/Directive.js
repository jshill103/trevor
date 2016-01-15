angular.module('App.directives', [])
    .directive('App', [function() {
        'use strict';
        return {
            restrict: 'A',
            controller: 'Controller',
            templateUrl: 'partials/partial.html'
        };
    }]);
