var app = angular.module('suggestionBox', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'views/box.html'
		})
		.when('/suggestion/:id', {
			controller: 'SuggestionController',
			templateUrl: 'views/suggestion.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});