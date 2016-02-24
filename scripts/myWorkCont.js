var app = angular.module('port');

app.controller('myWorkCont', function($scope) { 
	
	//function to showw toggleHead content
	$scope.reveal = function(trigger) {
		$(function() {
			$("#" + trigger + "").siblings().slideToggle();
			$("#gitPic").slideToggle();
        });
	};

});


//directive that 
app.directive('targetBlank', function() {
  return {
    compile: function(element) {
      var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
      elems.attr("target", "_blank");
    }
  };
});
	
