const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const btnG = document.querySelector('.arrow_left');
const btnD = document.querySelector('.arrow_right');
const banner_img = document.querySelector('.banner-img');
const banner_tagline = document.querySelector('#banner p');
const dots = document.querySelector('.dots');
let cpt = 0;

btnG.addEventListener("click", () => {
	cpt--;
	if (cpt < 0) {
		cpt = slides.length - 1;
	}
	displayImage();
	displayBullets();
	displayTagline();
})

btnD.addEventListener("click", () => {
	cpt++;
	if (cpt >= slides.length) {
		cpt = 0;
	}
	displayImage();
	displayBullets();
	displayTagline();
})


const init = () => {
	displayImage();
	displayBullets();
	displayTagline();
}

const displayImage = () => {
	// Afficher la première image des slides
	banner_img.src = './assets/images/slideshow/' + slides[cpt].image;
}

const displayTagline = () => {
	// changer la tagline selon l'image
	banner_tagline.innerHTML = slides[cpt].tagLine;
}

const displayBullets = () => {
	//Afficher les bullets point sur l'image
	dots.innerHTML = '';
	for (let i = 0; i < slides.length; i++) {
		const bullets = document.createElement('div');
		bullets.classList.add('dot');
		if (i == cpt) {
			bullets.classList.add('dot_selected');
		}

		dots.appendChild(bullets);
	}
}

init();
