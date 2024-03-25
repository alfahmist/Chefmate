// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 2,
	spaceBetween: 5,
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		bulletClass: "swiper-pagination-bullet",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		// when window width is >= 640px
		640: {
			slidesPerView: 6,
			spaceBetween: 10,
		},
	},
});
