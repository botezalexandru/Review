reviewApp.directive('reviewInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '=',
      index: '@'
    },
    templateUrl: 'views/reviewView.html',
    link: function(scope,el,attr,cntr) {
    
       scope.makeStar = function(nr){
       		inputs = el.find('input');
       		angular.forEach(inputs, function(input, key){
       			if(key<nr)
       				input.setAttribute('checked',true)
       		});

       }
     }
  };
});