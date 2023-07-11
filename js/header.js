const headerMenu = document.querySelector(".header__menu");
const headerNav = document.querySelector(".header__nav");

headerMenu.addEventListener("click", function (e) {
	// Prevent default behavior of link
	e.preventDefault();
	// Change hamburger menu to X
	headerMenu.classList.toggle("open");
	// Show navigation
	headerNav.classList.toggle("open");
});
