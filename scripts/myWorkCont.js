var app = angular.module('port');

app.controller('myWorkCont', function($scope){ 

	//JQUERYYYYYYYYYYYY!!!!!!!!!!!!
	$scope.reveal = function(trigger) {
		$(function() {
			//readyyy, GO!
			var p = "#" + trigger + " > p";
			var img = "#" + trigger + " > img";
			var sect = "#" + trigger + " > section";
			$(p + ", " + img + ", " + sect).slideToggle();
        });
	};


	        
    	
	});
	
