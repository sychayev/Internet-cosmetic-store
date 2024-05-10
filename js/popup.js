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

//-------------------------POPUP - A 360px----------------------
//---------------------For open POPUP-A----------------------------

document.getElementById("open-popup-a-mobile").addEventListener("click", function () {
	// alert("nshd")
	document.getElementById("popup-a").classList.add("open")
})

//-------------------------POPUP - B 360px----------------------
//---------------------For open POPUP-B----------------------------

document.getElementById("open-popup-b-mobile").addEventListener("click", function () {
	// alert("nshd")
	document.getElementById("popup-b").classList.add("open")
})

// --- Close popup when pushed page POPUP-B-------

document.querySelector("#popup-b .popup-basket").addEventListener('click', event => {
	event._isClickWithInMen = true;
});
document.getElementById("popup-b").addEventListener('click', event => {
	if (event._isClickWithInMen) return;
	event.currentTarget.classList.remove("open")
});

document.querySelector("#popup-b .popup-basket").addEventListener('click', event => {
	event._isClickWithInMen = true;
});
document.getElementById("popup-b").addEventListener('click', event => {
	if (event._isClickWithInMen) return;
	event.currentTarget.classList.remove("open")
});

//----------------For heart in the image turn on red color ------

// document.getElementById("heart-choice").addEventListener("click", function () {
// 	document.getElementById("heart-red-color").classList.add("open")
// })

//-------------------------POPUP - A Mobile block----------------------
//---------------------For open POPUP-A----------------------------

document.getElementById("mobile-block-open-popup-a").addEventListener("click", function () {
	// alert("nshd")
	document.getElementById("popup-a").classList.add("open")
})

//-------------------------POPUP - B Mobile block----------------------
//---------------------For open POPUP-B Mobile----------------------------

// document.getElementById("mobile-block-open-popup-b").addEventListener("click", function () {
// 	document.getElementById("popup-b-mobile").classList.add("open")
// })

//---------------------For close  button X POPUP B Mobile block --------------------------

document.getElementById("#close-popup-b-mobile").addEventListener("click", function () {
	document.getElementById(".popup").classList.remove("open")
})

document.getElementById("close-popup-b-mobile").addEventListener("click", function () {
	document.getElementById("client-cabinet").classList.remove("open")
})

//---------------------For close  button X --------------------------

document.getElementById("close-popup-b").addEventListener("click", function () {
	document.getElementById("popup-b").classList.remove("open")
})

// ----Close popup when button escape pushed POPUP-B Mobile block-----------

window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		document.getElementById("popup-b-mobile").classList.remove("open")
	}
});

// --- Close popup when pushed page POPUP-B Mobile block-------

document.querySelector("popup-b-mobile .client-cabinet").addEventListener('click', event => {
	event._isClickWithInMen = true;
});
document.getElementById("popup-b-mobile").addEventListener('click', event => {
	if (event._isClickWithInMen) return;
	event.currentTarget.classList.remove("open")
});

document.querySelector("popup-b-mobile .popup-basket").addEventListener('click', event => {
	event._isClickWithInMen = true;
});
document.getElementById("popup-b-mobile").addEventListener('click', event => {
	if (event._isClickWithInMen) return;
	event.currentTarget.classList.remove("open")
});