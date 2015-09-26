reviewApp.controller('detailController', function($scope, $stateParams, userReviewList) {

	$scope.person = userReviewList.get()[$stateParams.id];

})