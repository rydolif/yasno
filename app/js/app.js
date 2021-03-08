'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------SLIDER-hero----------------------
		// var mySwiper = new Swiper('.hero__slider', {
		// 	slidesPerView: 1,
		// 	spaceBetween: 30,
		// 	loop: true,
		// 	effect: 'fade',
		// 	autoplay: {
		// 		delay: 5000,
		// 	},
		// 	pagination: {
		// 		el: '.hero__pagination',
		// 		clickable: 'true',
		// 	},
		// 	navigation: {
		// 		nextEl: '.hero__next',
		// 		prevEl: '.hero__prev',
		// 	},
		// 	breakpoints: {
		// 		320: {
		// 			slidesPerView: 2,
		// 			spaceBetween: 20
		// 		},
		// 	}
		// });
	
	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);
	
			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});
	
		};
		// hamburger('.hamburger', '.header__nav', '.header');
		

});
	