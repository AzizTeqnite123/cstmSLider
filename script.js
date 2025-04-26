// VIDEO-POPUP

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

// VIDEO-POPUP


// SLIDER-SCRIPT

var swiper = new Swiper('.cstmSlider', {
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    allowTouchMove: false,
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
    // on: {
    //     slideChange: function () {
    //         const slides = document.querySelectorAll('.cstmSlider .swiper-slide');

    //         slides.forEach(slide => {
    //             slide.style.opacity = 0;
    //             slide.style.transform = "scale(0.8)";
    //             slide.classList.remove('animate-slide');
    //         });

    //         setTimeout(() => {
    //             slides.forEach(slide => {
    //                 slide.classList.add('animate-slide');
    //             });
    //         }, 50);
    //     }
    // }
});

// SLIDER-SCRIPT


// VIDEO-PLAY-BTN

// let currentVideo = null;

// document.querySelectorAll('.playBtnVd').forEach(function (playButton) {
//     playButton.addEventListener('click', function () {
//         var video = this.closest('.glrVdHldr').querySelector('video');

//         // Pause the currently playing video if there is one
//         if (currentVideo && currentVideo !== video) {
//             currentVideo.pause();
//             currentVideo.controls = false;
//             currentVideo.closest('.glrVdHldr').querySelector('.playBtnVd').style.display = 'block';
//         }

//         // Play or pause the clicked video
//         if (video.paused) {
//             video.play();
//             video.controls = true;
//             this.style.display = 'none';
//             currentVideo = video; // Set the current video to the one that's playing
//         } else {
//             video.pause();
//             video.controls = false;
//             this.style.display = 'block';
//             currentVideo = null; // Reset the current video if paused
//         }
//     });
// });

// VIDEO-PLAY-BTN