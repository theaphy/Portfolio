var app = angular.module('port');

app.controller('picturesCont', function($scope){ 

	//JQUERYYYYYYYYYYYY!!!!!!!!!!!!
	$(document).ready(function(){
		$("#bankHead").click(function(){
	        $("#botAbout").slideToggle();
	        $("#bot").slideToggle();
	    });

	    $("#stackHead").click(function(){
	    	$("#learningAbout").slideToggle();
	    	$("#stacksContainer").slideToggle();
	    });
	});
	
});