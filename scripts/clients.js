let clientsCounterNumber = document.getElementById('clients-counter-number');

let timeClientAnimation = 0;

async function increaseClientsNumber() {
    if (window.scrollY >= (clientsCounterNumber.offsetTop - window.innerHeight + 100)) {
        clientAnimate = true;
        for (let number = 0; number <= 350; number++) {
            clientsCounterNumber.innerText = number + '+ clientes';
            switch (true) {
                case (number < 100):
                    timeClientAnimation = timeClientAnimation + 0.01;
                    break;
                case ((number >= 100) && (number < 200)):
                    timeClientAnimation = timeClientAnimation + 0.03;
                    break;
                case ((number >= 200) && (number < 250)):
                    timeClientAnimation = timeClientAnimation + 0.1;
                    break;
                case ((number >= 250) && (number < 330)):
                    timeClientAnimation = timeClientAnimation + 0.3;
                    break;
                case ((number >= 330) && (number < 340)):
                    timeClientAnimation = timeClientAnimation + 1;
                    break;
                case ((number >= 340) && (number <= 345)):
                    timeClientAnimation = timeClientAnimation + 20;
                    break;
                case ((number >= 346) && (number <= 350)):
                    timeClientAnimation = timeClientAnimation + 100;
                    break;
            }

            await timer(timeClientAnimation);

        }
    }
}
