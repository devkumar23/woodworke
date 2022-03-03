$("#top-button").click(function(){
    $("ul").slideToggle();
})


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})