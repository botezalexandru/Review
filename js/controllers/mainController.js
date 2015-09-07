
reviewApp.controller('MainController', function($scope, $http) {

	
 	$scope.stars = [1,2,3,4,5];


 	$http.get("Database/fetchData.php")
	.success(function(response) {
		$scope.userReviews = response.records;
		$scope.userReviews.reverse();
		

	});



 	 $scope.currentPage = 0;
 	 $scope.pageSize = 20;
 	 $scope.numberOfPages=function() {
        return Math.ceil($scope.userReviews.length/$scope.pageSize);    
    };


 	$scope.makeStar = function(nr){
 		console.log(nr)
 	}
 	$scope.updateStar = function(nr){
 		$scope.nrStars = nr;
 	}
 	$scope.addReview = function() {
 		$scope.userReviews.unshift({
 			userName: $scope.inputUserName,
 			userEmail: $scope.inputUserEmail,
 			userReview: $scope.inputUserReview,
 			rating: $scope.nrStars
 		});

 		$scope.reviewForm.$setPristine(true);
 		$scope.inputUserName = '';
 		$scope.inputUserEmail = '';
 		$scope.inputUserReview = '';


 		
 	}
 	
 	$scope.insertdata = function() {
 		$http.post("Database/insert.php", {'inputUserName': $scope.inputUserName, 'inputUserEmail': $scope.inputUserEmail, 
 									'inputUserReview': $scope.inputUserReview, 'nrStars': $scope.nrStars})
 		.success(function(data, status, headers, config){
 			console.log("data inserted succesfully");

 			 		});

 	};
});



reviewApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; 
        return input.slice(start);
    }
});