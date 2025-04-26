Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        autoStart: true,
    },
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
            right: ["slideshow", "thumbs", "close"],
        },
    },
});


var swiper = new Swiper('.cstmSlider', {
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    simulateTouch: true,
    touchStartPreventDefault: true,
    allowTouchMove: false,
    grabCursor: true,
    slideToClickedSlide: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 3,
            centeredSlides: true,
        },
    },
    on: {
        slideChange: function () {
            const slides = document.querySelectorAll('.cstmSlider .swiper-slide');

            slides.forEach(slide => {
                slide.style.opacity = 0;
                slide.style.transform = "scale(0.8)";
                slide.classList.remove('animate-slide');
            });

            setTimeout(() => {
                slides.forEach(slide => {
                    slide.classList.add('animate-slide');
                });
            }, 50);
        }
    }
});


// Select all play buttons
document.querySelectorAll('.playBtnVd').forEach(function (playButton) {
    playButton.addEventListener('click', function () {
        var video = this.closest('.glrVdHldr').querySelector('video');
        // var controls = video.controls;

        if (video.paused) {
            video.play();
            video.controls = true;
            this.style.display = 'none';
        } else {
            video.pause();
            video.controls = false;
            this.style.display = 'block';
        }
    });
});
