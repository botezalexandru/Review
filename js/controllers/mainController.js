
reviewApp.controller('MainController', function($scope) {

	body = angular.element(document.body)
 	$scope.stars = [1,2,3,4,5];
 	$scope.userReviews = [
 	{

 		userName: 'bap',
 		userReview: 'Very nice indeed',
 		rating: 3

 	},

 	{
 		userName: 'illidan',
 		userReview: 'Very ddddsacz indeed',
 		rating: 4
 	},
 	{

 		userName: 'bap',
 		userReview: 'Very nice indeed',
 		rating: 3

 	},

 	{
 		userName: 'illidan',
 		userReview: 'Very ddddsacz indeed',
 		rating: 4
 	},

 	{

 		userName: 'bap',
 		userReview: 'Very nice indeed',
 		rating: 3

 	},

 	{
 		userName: 'illidan',
 		userReview: 'Very ddddsacz indeed',
 		rating: 4
 	},

 	{

 		userName: 'bap',
 		userReview: 'Very nice indeed',
 		rating: 3

 	},

 	{
 		userName: 'illidan',
 		userReview: 'Very ddddsacz indeed',
 		rating: 4
 	},

 	{

 		userName: 'bap',
 		userReview: 'Very nice indeed',
 		rating: 3

 	},

 	{
 		userName: 'illidan',
 		userReview: 'Very ddddsacz indeed',
 		rating: 4
 	},

 	];

 	 $scope.currentPage = 0;
 	 $scope.pageSize = 20;
 	 $scope.numberOfPages=function() {
        return Math.ceil($scope.userReviews.length/$scope.pageSize);                
    }






 	$scope.makeStar = function(nr){
 		console.log(nr)
 	}
 	$scope.updateStar = function(nr){
 		$scope.nrStars = nr;
 	}
 	$scope.addReview = function() {
 		$scope.userReviews.push({
 			userName: $scope.inputUserName,
 			userReview: $scope.inputUserReview,
 			rating: $scope.nrStars
 		});
 		$scope.reviewForm.$setPristine(true);
 		$scope.inputUserName = '';
 		$scope.inputUserEmail = '';
 		$scope.inputUserReview = '';
 	}
 	
 	
});



reviewApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});