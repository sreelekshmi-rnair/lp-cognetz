

var DREAMIT = {};
(function ($) {
	"use strict";


	//Loading Preloader
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			} else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();


	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

	}

	//Header Search js
	if ($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function () {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function () {
			$('body').removeClass('search-active');
		});
	}

	//educate all button
	$(function () {
		$('.solveta-button')
			.on('mouseenter', function (e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({ top: relY, left: relX })
			})
			.on('mouseout', function (e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({ top: relY, left: relX })
			});
	});

	$(function () {
		$('.button')
			.on('mouseenter', function (e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({ top: relY, left: relX })
			})
			.on('mouseout', function (e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({ top: relY, left: relX })
			});
	});

	// counterUp
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($('.dial').length) {
		$('.dial').appear(function () {
			var elm = $(this);
			var color = elm.attr('data-fgColor');
			var perc = elm.attr('value');

			elm.knob({
				'value': 0,
				'min': 0,
				'max': 100,
				'skin': 'tron',
				'readOnly': true,
				'thickness': 0.07,
				'dynamicDraw': true,
				'displayInput': false
			});

			$({ value: 0 }).animate({ value: perc }, {
				duration: 2000,
				easing: 'swing',
				progress: function () {
					elm.val(Math.ceil(this.value)).trigger('change');
				}
			});

			//circular progress bar color
			$(this).append(function () {
				// elm.parent().parent().find('.circular-bar-content').css('color',color);
				//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
			});

		}, { accY: 20 });
	}


	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}

	//LightBox / Fancybox
	if ($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				media: {}
			}
		});
	}

	// Scroll to a Specific Div
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 0);

		});
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}

	// count Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
			function () {
				var el = $(this);
				var percent = el.data("percent");
				$(el).css("width", percent).addClass("counted");
			}, {
			accY: -50
		}
		);
	}

	//Gallery Filters
	if ($('.filter-list').length) {
		$('.filter-list').mixItUp({});
	}


	/* ------------------------------- */
	/*  one page nav*/
	/* ------------------------------- */
	var $onepage_nav = $('.onepage-nav');
	var $sections = $('section');
	var $window = $(window);
	function TM_activateMenuItemOnReach() {
		if ($onepage_nav.length > 0) {
			var cur_pos = $window.scrollTop() + 2;
			var nav_height = $onepage_nav.outerHeight();
			$sections.each(function () {
				var top = $(this).offset().top - nav_height - 80,
					bottom = top + $(this).outerHeight();

				if (cur_pos >= top && cur_pos <= bottom) {
					$onepage_nav.find('a').parent().removeClass('current').removeClass('active');
					$sections.removeClass('current').removeClass('active');
					$onepage_nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
				}

				if (cur_pos <= nav_height && cur_pos >= 0) {
					$onepage_nav.find('a').parent().removeClass('current').removeClass('active');
					$onepage_nav.find('a[href="#header"]').parent().addClass('current').addClass('active');
				}
			});
		}
	}

	/* =================================
		Scrollig
	   ================================ */

	$(window).on('scroll', function () {
		headerStyle();
		TM_activateMenuItemOnReach();
	});

	/* ==============================
	   loading
	   ============================== */

	$(window).on('load', function () {
		handlePreloader();
	});

	//===== Nice select js
	if ($('select').length) {
		$('select').niceSelect();
	}

	//======< Custom Tab >======
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

	$(".tab ul.tabs li a").on("click", function (g) {
		var tab = $(this).closest('.tab'),
			index = $(this).closest('li').index();

		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');

		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

		g.preventDefault();
	});

	//Jquery Knob animation  // Pie Chart Animation
	if ($('.dial').length) {
		$('.dial').appear(function () {
			var elm = $(this);
			var color = elm.attr('data-fgColor');
			var perc = elm.attr('value');

			elm.knob({
				'value': 0,
				'min': 0,
				'max': 100,
				'skin': 'tron',
				'readOnly': true,
				'thickness': 0.5,
				'dynamicDraw': true,
				'displayInput': false
			});

			$({ value: 0 }).animate({ value: perc }, {
				duration: 2000,
				easing: 'swing',
				progress: function () {
					elm.val(Math.ceil(this.value)).trigger('change');
				}
			});

			//circular progress bar color
			$(this).append(function () {
				elm.parent().parent().find('.circular-bar-content').css('color', color);
				elm.parent().parent().find('.circular-bar-content .txt').text(perc);
			});

		}, { accY: 20 });
	}
	//Text Count
	if ($('.count-box').length) {
		$('.count-box').appear(function () {
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function () {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function () {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		}, { accY: 0 });
	}

	/* Popup Video */
	if ($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	}


	// Testimonal-active js
	var slider = new Swiper(".testi-active", {
		speed: 1500,
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		breakpoints: {
			1920: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});

	// Testimonal-active Two js
	var slider = new Swiper(".testi-active-two", {
		speed: 1500,
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		breakpoints: {
			1920: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});

	// Testimonal-active Two js
	var slider = new Swiper(".testi-active-three", {
		speed: 1500,
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		breakpoints: {
			1920: {
				slidesPerView: 1,
			},
			1400: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});

	// Testimonal-active Inner Service js
	var slider = new Swiper(".testi-active-inner", {
		speed: 1500,
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		breakpoints: {
			1920: {
				slidesPerView: 1,
			},
			1400: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});

	//  Project-active js
	var slider = new Swiper(".project-active", {
		speed: 1500,
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		breakpoints: {
			1920: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});

	// Service-active js
	var slider = new Swiper(".service-active", {
		speed: 1500,
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		breakpoints: {
			1920: {
				slidesPerView: 4,
			},
			1400: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			}
		}
	});

	//  Project-active js
	var slider = new Swiper(".project-active-two", {
		speed: 1500,
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		centeredSlides: true,
		breakpoints: {
			1920: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});

	//  Brand-active js
	var slider = new Swiper(".brand-active", {
		speed: 1000,
		slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		centeredSlides: true,
		breakpoints: {
			1920: {
				slidesPerView: 6,
			},
			1400: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 5,
			},
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 2,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});

	//  Blog-active js
	var slider = new Swiper(".blog-active", {
		speed: 1000,
		slidesPerView: 6,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		breakpoints: {
			1920: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},

		// Navigation arrows
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});


	// blog-details-active
	var slider = new Swiper(".blog-details-active", {
		speed: 1500,
		loop: true,
		slidesPerView: 2,
		grabCursor: true,
		autoplay: false,
		breakpoints: {
			1920: {
				slidesPerView: 2,
			},
			1400: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			0: {
				slidesPerView: 1,
			},
		},

		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},


	});

	// =======< accordion js >========
	jQuery(document).ready(function ($) {
		"use strict";

		$(".accordion > li:eq(0) a").addClass("active").next().slideDown();
		$(".accordion a").on("click", function (j) {
			let dropDown = $(this).closest("li").find("p");

			$(this).closest(".accordion").find("p").not(dropDown).slideUp();

			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
			} else {
				$(this).closest(".accordion").find("a.active").removeClass("active");
				$(this).addClass("active");
			}

			dropDown.stop(false, true).slideToggle();

			j.preventDefault();
		});
	});



	/* Image Reveal Animation */
	if ($('.reveal').length) {
		gsap.registerPlugin(ScrollTrigger);
		let revealContainers = document.querySelectorAll(".reveal");
		revealContainers.forEach((container) => {
			let image = container.querySelector("img");
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					toggleActions: "play none none none"
				}
			});
			tl.set(container, {
				autoAlpha: 1
			});
			tl.from(container, 1, {
				xPercent: -100,
				ease: Power2.out
			});
			tl.from(image, 1, {
				xPercent: 100,
				scale: 1,
				delay: -1,
				ease: Power2.out
			});
		});
	}

	/* Text Effect Animation */
	if ($('.text-anime-3').length) {
		let animatedTextElements = document.querySelectorAll('.text-anime-3');

		animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element, start: "top 90%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});
	}

	// Title Animation
	let splitTitleLines = gsap.utils.toArray(".title-anim");

	splitTitleLines.forEach(splitTextLine => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
		});
		const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "lines" })
		tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
	});

	// Scroll down area start here ***
	$("#scrollDown").on("click", function () {
		setTimeout(function () {
			$("html, body").animate({ scrollTop: "+=1000px" }, "slow");
		}, 1000);
	});
	// Scroll down area end here ***


	// testimonal opacity
	gsap.registerPlugin(ScrollTrigger);

	const width = window.innerWidth;
	const boxes = gsap.utils.toArray(".single-testi-box");
	const container = document.getElementById("scroll-container");
	const stickyBox = document.getElementById("sticky-box");

	// Sticky right box
	if (width >= 1200) {
		ScrollTrigger.create({
			trigger: stickyBox,
			start: "top 9%",
			endTrigger: container,
			end:
				width >= 1700
					? "bottom 103.2%"
					: width >= 1400
						? "bottom 180%"
						: "bottom 160%",
			pin: true,
			pinSpacing: false,
			scrub: true,
		});
	}

	// Activate content boxes
	boxes.forEach((box, i) => {
		ScrollTrigger.create({
			trigger: box,
			start: "top 50%",
			end: "bottom 50%",
			onEnter: () => {
				for (let j = 0; j <= i; j++) {
					boxes[j].classList.add("before-opacity-0");
				}
			},
			onLeaveBack: () => {
				for (let j = i; j < boxes.length; j++) {
					boxes[j].classList.remove("before-opacity-0");
				}
			}
		});
	});


	// project box item scrool
	// window.addEventListener("load", () => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	const width = window.innerWidth;
	// 	const panels = gsap.utils.toArray(".service-single-boxs");

	// 	const endEl = document.querySelector(".service-section-four");
	// 	if (!endEl) {
	// 		return;
	// 	}

	// 	panels.forEach((panel, i) => {
	// 		gsap.set(panel, { zIndex: i });

	// 		ScrollTrigger.create({
	// 			trigger: panel,
	// 			start: "top 10%",
	// 			end:
	// 				width >= 1600
	// 					? "bottom 90%"
	// 					: width >= 1400
	// 						? "bottom 160%"
	// 						: "bottom 170%",
	// 			endTrigger: endEl,
	// 			pin: true,
	// 			pinSpacing: false,
	// 			scrub: 1,
	// 			markers: false,
	// 		});
	// 	});
	// });



	// service-box active js
	$(document).ready(function () {
		$('.joint-event-box').on('mouseenter', function () {
			$(this).addClass('active'); // Add the 'active'
			$('.joint-event-box').not(this).removeClass('active'); // Remove the 'active'
		});
	});

})(window.jQuery);


// Swiper Team Js
document.querySelectorAll(".team-wrapper").forEach(wrapper => {
	const profileImg = wrapper.querySelector(".activeImage");
	const profileNameLink = wrapper.querySelector(".activeName .activeLink");
	const profileRole = wrapper.querySelector(".activeRole");
	const slides = wrapper.querySelectorAll(".swiper-slide");

	const swiper = new Swiper(wrapper.querySelector(".team-active-swiper"), {
		speed: 1500,
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		breakpoints: {
			1920: { slidesPerView: 3 },
			1400: { slidesPerView: 3 },
			1200: { slidesPerView: 2 },
			992: { slidesPerView: 2 },
			768: { slidesPerView: 2 },
			767: { slidesPerView: 2 },
			576: { slidesPerView: 2 },
			424: { slidesPerView: 2 },
			0: { slidesPerView: 1 }
		},
		// Navigation arrows
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
		on: {
			slideChange: function () {
				updateProfile(swiper.slides[swiper.realIndex]);
			}
		}

	});

	function updateProfile(slide) {
		profileImg.src = slide.dataset.img;
		profileNameLink.textContent = slide.dataset.name;
		profileNameLink.href = slide.dataset.link || "#";
		profileRole.textContent = slide.dataset.role;

		// Active class update
		wrapper.querySelector(".swiper-slide.active")?.classList.remove("active");
		slide.classList.add("active");
	}

	slides.forEach((slide, index) => {
		slide.addEventListener("click", () => {
			swiper.slideToLoop(index);
			updateProfile(slide);
		});
	});

	// Initialize first slide info on load
	updateProfile(slides[0]);
});