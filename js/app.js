var reviewApp = angular.module('reviewApp', ['ui.router', 'ngResource']);

reviewApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider 
    .state('home', {
      url: 			'/', 
      controller: 	'MainController', 
      templateUrl: 	'views/home.html',  
      
    }) 

    .state('details', {
      url:			'/details?id',
      controller: 	'detailController',
      templateUrl: 	'views/detail.html', 
      
    })

    .state('details.changeUserName', {
      url: '/changeUserName', 
      templateUrl: 'views/changeUserName.html', 
    })



    $urlRouterProvider.otherwise('/'); 

});