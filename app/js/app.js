'use strict';

document.addEventListener("DOMContentLoaded", function() {
	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);

			button.addEventListener('click', (e) => {
				button.classList.toggle('hamburger--active');
				nav.classList.toggle('header__nav_more--active');
				header.classList.toggle('header--menu');
			});

		};
		hamburger('.hamburger', '.header__nav_more', '.header');

	//----------------------SLIDER-hero----------------------
		var mySwiper = new Swiper('.question__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: '.question__button_next',
				prevEl: '.question__button_prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 15
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30
				},
			}
		});


		//----------------------TABS-JS----------------------
			const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
				let check = document.querySelector(headerSelector);

				if (check) {
					const header = document.querySelector(headerSelector),
								tab = document.querySelectorAll(tabSelector),
								content = document.querySelectorAll(contentSelector);
				
					function hideTabContent() {
						content.forEach(item => {
							item.style.display = "none";
						});
				
						tab.forEach(item => {
							item.classList.remove(activeClass);
						});
					}
				
					function showTabContent(i = 0) {
						content[i].style.display = "flex";
						tab[i].classList.add(activeClass);
					}
				
					hideTabContent();
					showTabContent();
				
					header.addEventListener('click', (e) => {
						const target = e.target;
						if (target && 
							(target.classList.contains(tabSelector.replace(/\./, '')) || 
							target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
							tab.forEach((item, i) => {
								if (target == item || target.parentNode == item) {
									hideTabContent();
									showTabContent(i);
								}
							});
						}
					});
				}
			};
			tabs('.tabs', '.tabs__item', '.tabs__wrap', 'tabs__item--active');

});
	