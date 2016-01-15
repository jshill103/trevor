    angular.module('App.Factory', [])
        .factory('myFactory', ['$http', '$q', '$log', function($http, $q, $log) {
			'use strict';
				return {
					getCases: function(data) {
					return $http({
						method: 'POST',
						url: 'http://test.monsterhunterlfg.com/api/getData.php',
						headers: {
						'Content-Type': 'application/json; charset=utf-8'
						},
						params: {data: data}
					});
				}
			};
		}]);

