const priceBomber = document.querySelector('.priceBomber');
const priceSneakers = document.querySelector('.priceSneakers');
const priceJeans = document.querySelector('.priceJeans');
const priceBelt = document.querySelector('.priceBelt');
const total = document.querySelector('.total');
const button = document.querySelector('.btn');


let priceBomberNumber = Number(priceBomber.innerHTML);
console.log(priceBomberNumber);

let priceSneakersNumber = Number(priceSneakers.innerHTML);
console.log(priceSneakersNumber);

let priceJeansNumber = Number(priceJeans.innerHTML);
console.log(priceJeansNumber);

let priceBeltNumber = Number(priceBelt.innerHTML);
console.log(priceBeltNumber);

const totalPrice = priceBomberNumber + priceSneakersNumber + priceJeansNumber + priceBeltNumber;
console.log(totalPrice);

total.textContent = `${totalPrice} руб.`;

function promo() {
    priceBomber.innerHTML = (priceBomberNumber - (priceBomberNumber * 20 / 100));
    priceSneakers.innerHTML = (priceSneakersNumber - (priceSneakersNumber * 20 / 100));
    priceJeans.innerHTML = (priceJeansNumber - (priceJeansNumber * 20 / 100));
    priceBelt.innerHTML = (priceBeltNumber - (priceBeltNumber * 20 / 100));
    total.innerHTML = (totalPrice - (totalPrice * 20 / 100)) + " руб.";
}


button.addEventListener('click', promo);