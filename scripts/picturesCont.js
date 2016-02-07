var app = angular.module('port');

app.controller('picturesCont', function($scope){ 

	//function that tiggles the triggerHead content (lol tiggles)
	$scope.reveal = function(trigger) {
		$(function() {
			$("#" + trigger + "").siblings().slideToggle();
        });
	};	
	
	$('.slickCarousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});