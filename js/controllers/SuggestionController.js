app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	$scope.post = suggestions.posts[$routeParams.id];
	// Function that adds new comment
	$scope.addComment = function() {
		if(!$scope.body || $scope.body === "") {
			alert("Add something bro...");
			return;
		}
		$scope.post.comments.push({
			body: $scope.body,
			upvotes: 0
		});
		$scope.body = "";
	};
	// Function to add number of upvotes
	$scope.upVote = function(comment) {
		comment.upvotes += 1;
	};
}]);