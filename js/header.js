const headerMenu = document.querySelector(".header__menu");
const headerNav = document.querySelector(".header__nav");
const navLinks = document.querySelector(".nav__links");

headerMenu.addEventListener("click", function (e) {
	// Prevent default behavior of link
	e.preventDefault();
	// Change hamburger menu to X
	headerMenu.classList.toggle("open");
	// Show navigation
	headerNav.classList.toggle("open");
	// Prevent scrolling
	document.body.classList.toggle("no-scroll");
});

// Implement smooth scrolling
navLinks.addEventListener("click", function (e) {
	e.preventDefault();

	if (e.target.classList.contains("nav__link")) {
		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
	}
});
