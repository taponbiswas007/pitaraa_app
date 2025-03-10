
$(document).ready(function () {
    $('.center').slick({
        centerMode: true,
        arrows: true,
        dots: true,
        centerPadding: '60px',
        slidesToShow: 5,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

});