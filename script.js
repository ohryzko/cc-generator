function generateCreditCardNumber() {
  const prefix = ['4', '5', '37', '6'][Math.floor(Math.random() * 4)];
  let number = prefix;

  while (number.length < 16) {
    const digit = Math.floor(Math.random() * 10);
    number += digit;
  }

  let sum = 0;
  let alternate = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i), 10);
    if (alternate) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    alternate = !alternate;
  }

  const checkDigit = sum % 10;
  number += (checkDigit === 0 ? '0' : (10 - checkDigit).toString());

  document.getElementById('credit-card-number').textContent = number;
}
