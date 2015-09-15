var reviewApp = angular.module('reviewApp', ['ngRoute']);

reviewApp.config(function($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'MainController', 
      templateUrl: 'views/home.html',  
      
    }) 

    .when('/details/:id', {
      controller: "detailController",
      templateUrl: "views/detail.html", 
      
    })

    .otherwise({ 
      redirectTo: '/' 
    }); 
});