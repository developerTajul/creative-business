(function($){

	jQuery(document).ready(function(){

        /*** AOS */
		AOS.init({
			once: true,
			offset: 0,
			duration: 900,
		});
    	
        // testimonial-active 
        var testimonials__slider;
        testimonials__slider = $('.testimonial-area__slider');

        testimonials__slider.slick({
            dots: true, 
            speed: 300,
            arrows: true,
            autoplay: true,
            slidesToShow: 3,
            infinite: true,
            slidesToScroll: 1,
            autoplaySpeed: 500,
            dotsClass: "slick-dots list-inline",
            nextArrow: '<button class="slide-arrow prev-arrow fa-solid fa-arrow-right-long"></button>',
            prevArrow: '<button class="slide-arrow next-arrow fa-solid fa-arrow-left-long"></button>',
            appendDots: $(".slider-controls"),
            responsive: [
            {
                breakpoint: 768,
                settings: {
                 slidesToShow: 2
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1
                }
            }
            ]
        }); 

        /** counter **/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

	});

}(jQuery));



// header

// header Five

const openMenuBtn = document.querySelector('.header-area .open-menu-btn button');
const mobileMenu = document.querySelector('.header-area .mobile-menu-area');
const closeBtn = document.querySelector('.header-area .close-btn button');
const body = document.querySelector('body');

openMenuBtn.addEventListener('click', function () {
    mobileMenu.classList.add('toggle-mobile-menu');
    body.classList.add('bg-gray');
})
closeBtn.addEventListener('click', function () {
    mobileMenu.classList.remove('toggle-mobile-menu');
    body.classList.remove('bg-gray');
})