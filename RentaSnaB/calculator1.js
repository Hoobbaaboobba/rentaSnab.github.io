const priceInputs = document.querySelector('[name=heights]');
const quantityInputs = document.querySelector('[name=widths]');
const thirdInputs =  document.querySelector('[name=lenghts]');
const totals = document.querySelector('.totals');
const quantityLabels = document.querySelector('.quantity-label');


// create the functions that we'll need
function calculatePieCosts() {
    const prices = priceInputs.value;
    const quantitys = quantityInputs.value;
    const thirds = thirdInputs.value;
    const costs = prices * 1 * thirds * 5500;
    totals.innerText = '' + costs.toFixed(2);
}

// on first fun
calculatePieCosts();


// add our event listeners
priceInputs.addEventListener('input', calculatePieCosts);
quantityInputs.addEventListener('input', calculatePieCosts);
thirdInputs.addEventListener('input', calculatePieCosts);