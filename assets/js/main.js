$(document).ready(function () {
    $('.center').slick({
        centerMode: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    // Function to update timer
    function startSliderTimer() {
        let timeLeft = 3; // Start from 3 seconds
        let timerElement = $('<div class="slider-timer">3s</div>');

        // Append timer to the current active slide
        $('.mobilescreenslider').append(timerElement);

        let interval = setInterval(() => {
            timeLeft--;
            if (timeLeft <= 0) {
                timeLeft = 3; // Reset timer after 3s
            }
            $('.slider-timer').text(timeLeft + "s");
        }, 1000);

        $('.center').on('beforeChange', function () {
            clearInterval(interval); // Stop old timer
            $('.slider-timer').remove(); // Remove old timer
        });

        $('.center').on('afterChange', function () {
            startSliderTimer(); // Restart timer for new slide
        });
    }

    startSliderTimer(); // Start on load
});
