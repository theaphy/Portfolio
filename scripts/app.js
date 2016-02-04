var app = angular.module('port', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        
        templateUrl: '../html/home.html'
    })
    .when('/home', {
        
        templateUrl: '../html/home.html'
    })
    .when('/resume', {
    	
    	templateUrl: '../html/resumePDF.html'
    })
    .when('/myWork', {
        controller: 'myWorkCont',
        templateUrl: '../html/myWork.html'
    }).otherwise({
        templateUrl: 'home.html'
    });
});