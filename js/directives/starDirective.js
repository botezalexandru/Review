reviewApp.directive('starDirective', function() {
  return {
    restrict: 'E',
    scope: {
      indexStar: '@'
    },
    templateUrl: 'views/starView.html',
  };
});