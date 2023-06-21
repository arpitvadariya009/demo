$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: false,
        touchDrag: false,
        dotsSpeed: ".5s",
        autoplay: true,
        animateIn: "animate__fadeIn",
        smartSpeed: 50,
        lazyLoad: true,
        slideTransition: ".1s",
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
})