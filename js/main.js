// $(function () {
// })
document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click",
		function () {
			document.querySelector(".header").classList.toggle("open");
	})

})

// document.addEventListener("DOMContentLoaded", function () {
// 	document.getElementById("link").addEventListener("click",
// 		function () {
// 			document.querySelector(".header").classList.toggle("open");
// 	})

// })
// ----Close menu when button escape pushed ------------
window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		document.querySelector(".header").classList.remove("open")
	}
});

//---- Close menu when pushed page -------
document.getElementById("menu").addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
	if (event._isClickWithInMenu) return;
	document.querySelector(".header").classList.remove("open")
});