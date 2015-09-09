reviewApp.factory('userReviewList', function($http) {
	return {
		get: function() {
			console.log("inside function");
			return $http.get("Database/fetchData.php");
		}
	}
	
});