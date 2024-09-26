const form = document.getElementById('converter-form');
const result = document.getElementById('result');

const apikey = 'a0e3e6935c941ac13110d577';
const apiURL = `https://api.exchangerate-api.com/v4/latest/`;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const initialCurrency = document.getElementById('initial-currency').value;
  const initialAmount = parseFloat(document.getElementById('initial-amount').value);
  const finalCurrency = document.getElementById('final-currency').value;

  fetch(`${apiURL}${initialCurrency}`)
    .then(response => response.json())
    .then(data => {
      const conversionRate = data.rates[finalCurrency];
      const finalAmount = initialAmount * conversionRate;
      result.textContent = `${initialAmount} ${initialCurrency} is: ${finalAmount.toFixed(2)} ${finalCurrency}`;
    })
    .catch(error => console.error(error));
});