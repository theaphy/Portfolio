var app = angular.module('port');

app.controller('myWorkCont', function($scope){ 

	//JQUERYYYYYYYYYYYY!!!!!!!!!!!!
	$(document).ready(function(){
		$scope.reveal = function(trigger) {
			var p = "#" + trigger + " > p";
			var img = "#" + trigger + " > img";
			$(p).slideToggle();
	        $(img).slideToggle();
		}


	        
    	});
	});
	
