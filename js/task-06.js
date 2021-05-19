const inputForWord = document.querySelector('#validation-input');

inputForWord.addEventListener('change', () => {
  if (
    inputForWord.value.length !==
    Number(inputForWord.getAttribute('data-length'))
  ) {
    inputForWord.classList.add('invalid');
    inputForWord.classList.remove('valid');
  } else {
    inputForWord.classList.remove('invalid');
    inputForWord.classList.add('valid');
  }
});
