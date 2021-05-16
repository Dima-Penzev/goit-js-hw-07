const increaseValueBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');
const decreaseValueBtn = document.querySelector('[data-action="decrement"]');

increaseValueBtn.addEventListener('click', () => {
  counterValue.innerHTML = Number(counterValue.innerHTML) + 1;
});
decreaseValueBtn.addEventListener('click', () => {
  counterValue.innerHTML -= 1;
});
