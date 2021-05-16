const inputForWord = document.querySelector('#validation-input');

inputForWord.addEventListener('change', () => {
  inputForWord.classList.add('invalid');

  if (
    inputForWord.value.length ===
    Number(inputForWord.getAttribute('data-length'))
  ) {
    inputForWord.classList.replace('invalid', 'valid');
  }
});
