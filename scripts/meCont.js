var app = angular.module('port');

app.controller('meCont', function($scope){ 

	//function that tiggles the triggerHead content (lol tiggles)
	$scope.reveal = function(trigger) {
		$(function() {
			$("#" + trigger + "").siblings().slideToggle();
        });
	};	
	
});