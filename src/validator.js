const validator = {
  isValid: function (cardNumber) {
    console.log(`isValid(${cardNumber})`);
    return true;
  },
  maskify: function (cardNumber) {
    console.log(`maskify(${cardNumber})`);
    return cardNumber;
  },
  isNumber: function (character) {
    console.log(`isNumber(${character})`);
    return true;
  },
};

export default validator;
