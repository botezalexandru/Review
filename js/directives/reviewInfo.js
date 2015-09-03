reviewApp.directive('reviewInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/reviewView.html'
  };
});