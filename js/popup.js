// $(function () {
// 	alert("jdhg")
// })
//---------------------  For POPUP-A  -----------------------

//---------------------For open POPUP A----------------------------

document.getElementById("open-popup-a").addEventListener("click", function () {
	document.getElementById("popup-a").classList.add("open")
})

//---------------------For close POPUP A button X --------------------------

document.getElementById("close-popup-a").addEventListener("click", function () {
	document.getElementById("popup-a").classList.remove("open")
})

// document.getElementById("close-submit-btn-popup-a").addEventListener("click", function () {
// 	document.getElementById("popup-a").classList.remove("open")
// })


// ----Close POPUP A when button escape pushed ------------

window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		document.getElementById("popup-a").classList.remove("open")
	}
});

//---- Close POPUP A when pushed page -------

document.querySelector("#popup-a .popup").addEventListener('click', event => {
	event._isClickWithInMen = true;
});
document.getElementById("popup-a").addEventListener('click', event => {
	if (event._isClickWithInMen) return;
	event.currentTarget.classList.remove("open")
});

//-------------------------POPUP - B ----------------------
//---------------------For open POPUP-B----------------------------

document.getElementById("open-popup-b").addEventListener("click", function () {
	// alert("nshd")
	document.getElementById("popup-b").classList.add("open")
})

// ----Close popup when button escape pushed POPUP-B------------

window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		document.getElementById("popup-b").classList.remove("open")
	}
});

//---------------------For close  button X --------------------------
document.getElementById("close-popup-b").addEventListener("click", function () {
	document.getElementById("popup-b").classList.remove("open")
})

//---- Close popup when pushed page POPUP-B-------

document.querySelector("#popup-b .popup-basket").addEventListener('click', event => {
	event._isClickWithInBasket = true;
});
document.getElementById("popup-b").addEventListener('click', event => {
	if (event._isClickWithInBasket) return;
	event.currentTarget.classList.remove("open")
});

// --- Close popup when pushed page POPUP-B-------

// document.querySelector("#popup-b .popup-basket").addEventListener('click', event => {
// 	event._isClickWithInMen = true;
// });
// document.getElementById("popup-b").addEventListener('click', event => {
// 	if (event._isClickWithInMen) return;
// 	event.currentTarget.classList.remove("open")
// });

// document.querySelector("#popup-b .popup-basket").addEventListener('click', event => {
// 	event._isClickWithInMen = true;
// });
// document.getElementById("popup-b").addEventListener('click', event => {
// 	if (event._isClickWithInMen) return;
// 	event.currentTarget.classList.remove("open")
// });

//----------------For heart in the image turn on red color ------

// document.getElementById("heart-choice").addEventListener("click", function () {
// 	document.getElementById("heart-red-color").classList.add("open")
// })