reviewApp.controller('detailController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.person = $scope.userReviews[$routeParams.id];

}])