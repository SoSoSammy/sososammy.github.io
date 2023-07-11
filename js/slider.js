const sliderMobile = function () {
	const slides = document.querySelectorAll(".slider--mobile .slide");
	const btnLeft = document.querySelector(".slider--mobile .slider__btn--left");
	const btnRight = document.querySelector(".slider--mobile .slider__btn--right");
	const dotContainer = document.querySelector(".slider--mobile .dots");

	let curSlide = 0;
	const maxSlide = slides.length;

	/////// Functions ///////
	// Create the dots
	const createDots = function () {
		slides.forEach(function (_, i) {
			dotContainer.insertAdjacentHTML(
				"beforeend",
				`<button class="dots__dot" data-slide="${i}"></button>`,
			);
		});
	};

	// Create the active dot
	const activateDot = function (slide) {
		// Remove the active class from all dots
		document
			.querySelectorAll(".slider--mobile .dots__dot")
			.forEach((dot) => dot.classList.remove("dots__dot--active"));

		// Apply the active class to the current slide's dot
		document
			.querySelector(`.slider--mobile .dots__dot[data-slide="${slide}"]`)
			.classList.add("dots__dot--active");
	};

	// Go to the specified slide
	const goToSlide = function (slide) {
		slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
	};

	// Previous slide
	const prevSlide = function () {
		// If the current slide is the first slide, then reset the current slide to the last slide
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
		activateDot(curSlide);
	};

	// Next slide
	const nextSlide = function () {
		// If the current slide is the last slide, then reset the current slide to 0. Otherwise, increase the slide by 1
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}

		goToSlide(curSlide);
		activateDot(curSlide);
	};

	// Initialization
	const init = function () {
		goToSlide(0);
		createDots();
		activateDot(0);
	};
	init();

	/////// Event Handlers ///////
	// When the left and right arrow buttons are clicked
	btnLeft.addEventListener("click", prevSlide);
	btnRight.addEventListener("click", nextSlide);

	// When the left and right arrow keys are pressed
	document.addEventListener("keydown", function (e) {
		// Could also do:
		// if (e.key === "ArrowLeft") prevSlide();
		e.key === "ArrowLeft" && prevSlide();
		e.key === "ArrowRight" && nextSlide();
	});

	// When the dots are clicked
	dotContainer.addEventListener("click", function (e) {
		if (e.target.classList.contains("dots__dot")) {
			// Get the data-slide attribute's value
			curSlide = +e.target.dataset.slide;
			goToSlide(curSlide);
			activateDot(curSlide);
		}
	});
};

const sliderDesktop = function () {
	const slides = document.querySelectorAll(".slider--desktop .slide");
	const btnLeft = document.querySelector(".slider--desktop .slider__btn--left");
	const btnRight = document.querySelector(".slider--desktop .slider__btn--right");
	const dotContainer = document.querySelector(".slider--desktop .dots");

	let curSlide = 0;
	const maxSlide = slides.length;

	/////// Functions ///////
	// Create the dots
	const createDots = function () {
		slides.forEach(function (_, i) {
			dotContainer.insertAdjacentHTML(
				"beforeend",
				`<button class="dots__dot" data-slide="${i}"></button>`,
			);
		});
	};

	// Create the active dot
	const activateDot = function (slide) {
		// Remove the active class from all dots
		document
			.querySelectorAll(".slider--desktop .dots__dot")
			.forEach((dot) => dot.classList.remove("dots__dot--active"));

		// Apply the active class to the current slide's dot
		document
			.querySelector(`.slider--desktop .dots__dot[data-slide="${slide}"]`)
			.classList.add("dots__dot--active");
	};

	// Go to the specified slide
	const goToSlide = function (slide) {
		slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
	};

	// Previous slide
	const prevSlide = function () {
		// If the current slide is the first slide, then reset the current slide to the last slide
		if (curSlide === 0) {
			curSlide = maxSlide - 1;
		} else {
			curSlide--;
		}
		goToSlide(curSlide);
		activateDot(curSlide);
	};

	// Next slide
	const nextSlide = function () {
		// If the current slide is the last slide, then reset the current slide to 0. Otherwise, increase the slide by 1
		if (curSlide === maxSlide - 1) {
			curSlide = 0;
		} else {
			curSlide++;
		}

		goToSlide(curSlide);
		activateDot(curSlide);
	};

	// Initialization
	const init = function () {
		goToSlide(0);
		createDots();
		activateDot(0);
	};
	init();

	/////// Event Handlers ///////
	// When the left and right arrow buttons are clicked
	btnLeft.addEventListener("click", prevSlide);
	btnRight.addEventListener("click", nextSlide);

	// When the left and right arrow keys are pressed
	document.addEventListener("keydown", function (e) {
		// Could also do:
		// if (e.key === "ArrowLeft") prevSlide();
		e.key === "ArrowLeft" && prevSlide();
		e.key === "ArrowRight" && nextSlide();
	});

	// When the dots are clicked
	dotContainer.addEventListener("click", function (e) {
		if (e.target.classList.contains("dots__dot")) {
			// Get the data-slide attribute's value
			curSlide = +e.target.dataset.slide;
			goToSlide(curSlide);
			activateDot(curSlide);
		}
	});
};

sliderMobile();
sliderDesktop();
