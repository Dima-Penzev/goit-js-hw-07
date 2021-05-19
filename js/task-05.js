const inputForName = document.querySelector('#name-input');
const stringWithName = document.querySelector('#name-output');

const defaultValue = stringWithName.textContent;

inputForName.addEventListener('input', () => {
  if (inputForName.value) {
    stringWithName.textContent = inputForName.value;
  } else {
    stringWithName.textContent = defaultValue;
  }
});
