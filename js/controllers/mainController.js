
reviewApp.controller('MainController', function($scope, $http) {

	
 	$scope.stars = [1,2,3,4,5];
 	$scope.limit = 3;
 	$scope.pageSize = 3;
 	$scope.beginWithRow = 0;
 	$scope.virtualCurrentPage = 0;

 	$http.get("Database/fetchData.php", {
 		params: { limit: $scope.pageSize,
 				  beginWithRow: $scope.beginWithRow }
 	})
	.success(function(response) {
		$scope.userReviews = response.review;
		$scope.userReviews.reverse();
		$scope.databaseSize = parseInt(response.rowCount);
	});
	$scope.nextReviews = function() {
		$scope.virtualCurrentPage++;
		$scope.beginWithRow += 3;
		$http.get("Database/fetchData.php", {
 		params: { limit: $scope.pageSize,
 				  beginWithRow: $scope.beginWithRow }
 	})
	.success(function(response) {
		$scope.userReviews = response.review;
		$scope.userReviews.reverse();
		$scope.databaseSize = parseInt(response.rowCount);
		debugger
	});
	};

	$scope.prevReviews = function() {
		$scope.virtualCurrentPage--;
		$scope.beginWithRow -= 3;
		$http.get("Database/fetchData.php", {
 		params: { limit: $scope.pageSize,
 				  beginWithRow: $scope.beginWithRow }
 	})
	.success(function(response) {
		$scope.userReviews = response.review;
		$scope.userReviews.reverse();
		$scope.databaseSize = parseInt(response.rowCount);
		debugger
	});
	};

 	 $scope.currentPage = 0;
 	 
 		$scope.numberOfPages=function() {
        return Math.ceil($scope.databaseSize/$scope.pageSize);    
    };



 	$scope.makeStar = function(nr){
 		console.log(nr)
 	}
 	$scope.updateStar = function(nr){
 		$scope.nrStars = nr;
 	}

 	$scope.insertdata = function() {
 		$http.post("Database/insert.php", {'inputUserName': $scope.inputUserName, 'inputUserEmail': $scope.inputUserEmail, 
 									'inputUserReview': $scope.inputUserReview, 'nrStars': $scope.nrStars})
 		.success(function(data, status, headers, config){
 			console.log("data inserted succesfully");
 					if(data.message === "Email is valid") {
 						$scope.addReview();
 					} else  if (data.message === "Email already in database") {
 						alert('Email already exists, please insert another email');
						$scope.reviewForm.$setPristine(true);
				 		$scope.inputUserName = '';
				 		$scope.inputUserEmail = '';
				 		$scope.inputUserReview = '';
				 		$scope.nrStars='';
							}
 			 		});
 	}; 	

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
 		$scope.nrStars='';

 	}

});



reviewApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; 
        return input.slice(start);
    }
});