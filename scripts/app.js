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
    })
    .when('/cameras', {
        controller: 'picturesCont',
        templateUrl: '../html/pictures.html'
    })
    .when('/me', {
        controller: 'meCont',
        templateUrl: '../html/me.html'
    })
    .otherwise({
        templateUrl: 'home.html'
    });
});