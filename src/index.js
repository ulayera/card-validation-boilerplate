import validator from './validator.js';

let input = document.getElementById('card-number');
let button = document.getElementById('validar');
let result = document.getElementById('result-span');

button.addEventListener('click', validar);
button.addEventListener('keyUp', validator.isNumber);

function validar(e) {
    let cardNumber = input.value;
    let maskedCardNumber = validator.maskify(cardNumber);
    console.log(cardNumber);
    if (validator.isValid(cardNumber)) {
        result.innerHTML = `La tarjeta ${maskedCardNumber} es válida`;
    } else {
        result.innerHTML = `La tarjeta ${maskedCardNumber} no es válida`;
    }
}

console.log(validator);