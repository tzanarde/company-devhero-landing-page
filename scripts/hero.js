let heroImage = document.getElementById('hero-image');

let timeHeroAnimation = 8000;

let heroImages = [];
heroImages.push('images/hero-laptop.png', 'images/hero-smartphone.png');

changeHeroImage();

async function changeHeroImage() {
    while (true) {
        for (let index = 0; index < heroImages.length; index++) {
            await timer(timeHeroAnimation);
            heroImage.src = heroImages[index];
        }
    }
}
