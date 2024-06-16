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

console.log(slides)

let flecheG = document.getElementById("flecheG")
console.log(flecheG)

let flecheD = document.getElementById("flecheD")
console.log(flecheD)

flecheG.addEventListener("click", () => {
	console.log("CLIQUE GAUCHE")
});

flecheD.addEventListener("click", () => {
	console.log("CLIQUE DROIT")
});

// for (let i = 0; flecheG.lenght; i++) {
// 	let flecheactuel = flecheG[i]
// 	console.log(flecheactuel)

// 	flecheactuel.addeventlistener("click", (event) => {
// 		fleche = event.target
// 		console.log(`J'ai cliqué sur la flèche :`)
// 	})
// }