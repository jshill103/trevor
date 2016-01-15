angular.module('App.Controller', [])
    .controller('Controller', ['$scope', 'myFactory', function($scope, myFactory) {
        'use strict';
        console.log('In the controller');
    }]);
