const increaseValueBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');
const decreaseValueBtn = document.querySelector('[data-action="decrement"]');

let number = 0;

increaseValueBtn.addEventListener('click', () => {
  counterValue.textContent = number += 1;
});
decreaseValueBtn.addEventListener('click', () => {
  counterValue.textContent = number -= 1;
});
