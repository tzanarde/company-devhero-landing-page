let productAnimate = false;
let clientAnimate = false;

window.onscroll = function() {
    if (!productAnimate) showProducts();
    if (!clientAnimate) increaseClientsNumber();
}

const timer = ms => new Promise(res => setTimeout(res, ms))
