const formForName = document.querySelector("#validation-input");

formForName.addEventListener("change", () => {
  formForName.classList.add("invalid");

  if (
    formForName.value.length === Number(formForName.getAttribute("data-length"))
  ) {
    formForName.classList.remove("invalid");
    formForName.classList.add("valid");
  }
});
