const priceInput = document.querySelector('[name=height]');
const quantityInput = document.querySelector('[name=width]');
const thirdInput =  document.querySelector('[name=lenght]');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');


// create the functions that we'll need
function calculatePieCost() {
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const third = thirdInput.value;
    const cost = price * 1 * third * 450;
    total.innerText = '' + cost.toFixed(2);
}

// on first fun
calculatePieCost();


// add our event listeners
priceInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', calculatePieCost);
thirdInput.addEventListener('input', calculatePieCost);