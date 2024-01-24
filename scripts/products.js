let product1 = document.getElementById('product1');
let product2 = document.getElementById('product2');
let product3 = document.getElementById('product3');
let product4 = document.getElementById('product4');
let product5 = document.getElementById('product5');
let product6 = document.getElementById('product6');
let product7 = document.getElementById('product7');
let product8 = document.getElementById('product8');

let productsSection = document.getElementById('products-section');

function showProducts() {
    if (window.scrollY >= (productsSection.offsetTop - window.innerHeight + 350)) {
        productAnimate = true;
        product1.classList.remove('hide');
        product1.classList.add('box-animation');
    }
}
