// $(function () {
// 	alert("jdhg")
// })
//---------------------  For Popup-a -----------------------

//---------------------For open ----------------------------

document.getElementById("open-popup-a").addEventListener("click", function () {
	document.getElementById("popup-a").classList.add("open")
})

//---------------------For close  button X --------------------------
document.getElementById("close-popup-a").addEventListener("click", function () {
	document.getElementById("popup-a").classList.remove("open")
})

document.getElementById("close-submit-btn-popup-a").addEventListener("click", function () {
	document.getElementById("popup-a").classList.remove("open")
})
// ----Close menu when button escape pushed ------------
window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		document.getElementById("popup-a").classList.remove("open")
	}
});


//---- Close menu when pushed page -------
document.querySelector("#popup-a .popup").addEventListener('click', event => {
	event._isClickWithInModal = true;
});
document.getElementById("popup-a").addEventListener('click', event => {
	if (event._isClickWithInModal) return;
	event.currentTarget.classList.remove("open")
});

//----------------For heart in the image turn on red color ------
document.getElementById("heart-choice").addEventListener("click", function () {
	document.getElementById("heart-red-color").classList.add("open")
})