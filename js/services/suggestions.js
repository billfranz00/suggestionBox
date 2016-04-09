app.factory('suggestions', [function() {
	var demoSuggestions = {
		posts: [
			{
				title: 'Saying "your face" jokes 10 times per day',
				upvotes: 15,
				comments: []
			},
			{
				title: 'Retrofit the Golden Gate Bridge with balloons',
				upvotes: 7,
				comments: []
			},
			{
				title: 'Sing "Tearin Up My Heart" by NSync in the middle of Silent Prayers of Confession',
				upvotes: 3,
				comments: []
			},
			{
				title: 'Hang Gliding while eating a cheesesteak',
				upvotes: 9,
				comments: []
			}
		]
	};
	return demoSuggestions;
}]);