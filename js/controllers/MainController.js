app.controller('MainController', ['$scope', 'suggestions', function($scope, suggestions) {
	$scope.helloWorld = "Brochacho Suggestions!!!";
	// suggestions.success(function(demoSuggestions) { - If retrieving data from server, this would be used
	// }); - closing if server is used
	$scope.posts = suggestions.posts;
	$scope.addSuggestion = function() {
		if(!$scope.title || $scope.title === "") {
			alert("Add something dude...");
			return;
		}
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
			comments: []
		});
		$scope.title = "";
	};
	$scope.upVote = function(post) {
		post.upvotes += 1;
	};
}]);