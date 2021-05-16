const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.setAttribute("value", 30);
slider.setAttribute("min", 10);
slider.setAttribute("max", 60);

slider.addEventListener("input", () => {
  text.style.fontSize = slider.value + "px";
});
