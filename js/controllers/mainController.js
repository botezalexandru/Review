
reviewApp.controller('MainController',  function($scope, $http, userReviewList) {

 	$scope.stars = [1,2,3,4,5];
 	$scope.pageSize = 5;
 	$scope.beginWithRow = 0;
 	$scope.virtualCurrentPage = 0;


 	userReviewList.fetch($scope.pageSize, $scope.beginWithRow)
 		.success(function() {
			$scope.userReviews = userReviewList.get();
			$scope.databaseSize = userReviewList.getDbSize();
 		})

	$scope.nextReviews = function() {
		$scope.virtualCurrentPage++;
		$scope.beginWithRow += $scope.pageSize;
	 	userReviewList.fetch($scope.pageSize, $scope.beginWithRow)
	 		.success(function() {
				$scope.userReviews = userReviewList.get();
				$scope.databaseSize = userReviewList.getDbSize();
	 		})
	};

	$scope.prevReviews = function() {
		$scope.virtualCurrentPage--;
		$scope.beginWithRow -= $scope.pageSize;

	 	userReviewList.fetch($scope.pageSize, $scope.beginWithRow)
	 		.success(function() {
				$scope.userReviews = userReviewList.get();
				$scope.databaseSize = userReviewList.getDbSize();
	 		})
	};

 	 $scope.currentPage = 0;
 	 
 		$scope.numberOfPages=function() {
        return Math.ceil($scope.databaseSize/$scope.pageSize);    
    };


 	$scope.updateStar = function(nr){
 		$scope.nrStars = nr;
 	}

 	$scope.insertdata = function() {
 		$http.post("Database/insert.php", {'inputUserName': 	$scope.inputUserName, 	'inputUserEmail': 	$scope.inputUserEmail, 
 										   'inputUserReview': 	$scope.inputUserReview, 'nrStars': 			$scope.nrStars})
 		.success(function(data, status, headers, config){
 			console.log("data inserted succesfully");
 					if(data.message === "Email is valid") {
 						$scope.addReview();
 					} else  if (data.message === "Email already in database") {
 						alert('Email already exists, please insert another email');
				 		$scope.inputUserEmail 	= '';
							}
 			 		});
 	}; 	

 	$scope.addReview = function() {
 		$scope.userReviews.unshift({
 			userName: 	$scope.inputUserName,
 			userEmail: 	$scope.inputUserEmail,
 			userReview: $scope.inputUserReview,
 			rating: 	$scope.nrStars
 		});

 		$scope.reviewForm.$setPristine(true);
 		$scope.inputUserName 	= '';
 		$scope.inputUserEmail  	= '';
 		$scope.inputUserReview 	= '';
 		$scope.nrStars			= '';

 	}


});


reviewApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; 
        return input.slice(start);
    }
});
