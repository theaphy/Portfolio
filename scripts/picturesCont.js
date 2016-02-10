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

app.directive('targetBlank', function() {
  return {
    compile: function(element) {
      var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
      elems.attr("target", "_blank");
    }
  };
});