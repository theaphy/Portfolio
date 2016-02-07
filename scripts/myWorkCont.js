var app = angular.module('port');

app.controller('myWorkCont', function($scope) { 
	
	//function to showw toggleHead content
	$scope.reveal = function(trigger) {
		$(function() {
			$("#" + trigger + "").siblings().slideToggle();
        });
	};

});
	
