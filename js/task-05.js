const formForName = document.querySelector('#name-input');
const stringWithName = document.querySelector('#name-output');

formForName.addEventListener('input', () => {
    stringWithName.innerHTML = formForName.value;
});