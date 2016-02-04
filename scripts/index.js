$(document).ready(function(){

    $('#dctHeader').click(function() {
        $('#dctAbout').slideToggle()
    });
    


    $('.carousel').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1
    });

}());


