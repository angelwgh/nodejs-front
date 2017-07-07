define([
		'directives/gh-marked-directive'
	],function () {

	var app = angular.module('app', [
			'gh-marked'
		]);

	app.controller('mainController', ['$scope','$http', 
		function($scope,$http){

			$http.get('/ajax').then(function (data) {
				console.log(data)
			})

			$http.post('/ajax/post').then(function (data) {
				console.log(data)
			})
		
	}])
	
})