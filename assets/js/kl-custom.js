$(function() {
    var owl = $('.owl-carousel');
    owl.each(function(i, slider) {
        slider = $(slider);
        var parent = slider.parent();
        parent.addClass("show active");
        slider.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: false
                }
            }
        })
        i && parent.removeClass("show active");
    })
})