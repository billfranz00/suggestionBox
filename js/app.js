var app = angular.module('suggestionBox', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/box.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});