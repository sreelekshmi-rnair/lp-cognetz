
	document.addEventListener("DOMContentLoaded", () => {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

		// Smooth scroll setup
		const smoother = ScrollSmoother.create({
			wrapper: "#smooth-wrapper",
			content: "#smooth-content",
			smooth: 1.1,
			effects: true,
			normalizeScroll: true
		});

	});

