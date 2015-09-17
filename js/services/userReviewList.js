reviewApp.factory('userReviewList', function($http) {
	var userReviews = []
	var databaseSize = 0
	return {
		fetch: function(pageSize, begin) {
			return $http.get("Database/fetchData.php", {
				params: { limit: 		pageSize,
						  beginWithRow: begin }
			}).success(function(response) {
				userReviews = response.review;
				userReviews.reverse();
				databaseSize = parseInt(response.rowCount);
			});
		},
		get: function() {
			return userReviews
		},
		getDbSize: function() {
			return databaseSize
		}
	}
	
});
