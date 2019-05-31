$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: false,
        autoplayTimeout: 3000,
        // autoplaySpeed: true,
        smartSpeed: 600,
        dots: true,
        // dotsContainer: 'comments__dots-wrapper',
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1
            }
        }
    });
});