const inputForName = document.querySelector('#name-input');
const stringWithName = document.querySelector('#name-output');

inputForName.addEventListener('input', () => {
  stringWithName.innerHTML = inputForName.value;
});
