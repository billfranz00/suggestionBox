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
		console.log($scope.posts);
		$scope.title = "";
	};
	$scope.upVote = function(post) {
		post.upvotes += 1;
		// for loop that switches the index of the post if it has more upvotes (had problem before where if a post swtiched position, the comment link would go to the comments of another post)
		var nombre = $scope.posts.indexOf(post); // index of the post being clicked on
		for(i = 0; i < nombre; i++) { // runs through every post up to the post being accessed
			if(post.upvotes > $scope.posts[i].upvotes) {
				var copy = $scope.posts.slice(i, i + 1) // nakes copy of post with less votes
				console.log(copy[0]) // copy is an array so copy[0] accesses object
				console.log(post) 
				$scope.posts.splice(i, 2, post, copy[0]) // removes both objects and then returns them into the array in opposite order
				console.log($scope.posts)
				return;
			}
		}
	};
}]);