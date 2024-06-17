const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const nbSlide = slides.length
const suivant = document.getElementById("flecheD")
const precedent = document.getElementById("flecheG")
let numero = 0
const imgBanner = document.getElementById("banner-image")
const textBanner = document.querySelector("#banner p")

for (let i = 0; i < nbSlide; i++){
	let divDots = document.getElementById("dots")

	let span = `<span id="${i}" class="dot"></span>`

	divDots.innerHTML += span
	// ajoutdot()
}
const dotBanner = document.querySelectorAll("#dots span")
dotBanner[numero].classList.add("dot_selected") 
// console.log(dotBanner)



function slideSuivante() {
	dotBanner[numero].classList.remove("dot_selected")  
	if (numero < nbSlide - 1) {
		numero++
	} else {
		numero = 0
	}
	console.log(numero)
	dotBanner[numero].classList.add("dot_selected") 
	imgBanner.src = "assets/images/slideshow/" + slides[numero].image
	textBanner.innerHTML = slides[numero].tagLine	


}

function slidePrecedente() {
	dotBanner[numero].classList.remove("dot_selected")  
	if (numero > 0) {
		numero--
	} else {
		numero = nbSlide - 1
	}
	console.log(numero)
	dotBanner[numero].classList.add("dot_selected") 
	imgBanner.src = "assets/images/slideshow/" + slides[numero].image
	textBanner.innerHTML = slides[numero].tagLine
}


precedent.addEventListener("click", slidePrecedente);
suivant.addEventListener("click", slideSuivante);


setInterval(slideSuivante, 4000)


