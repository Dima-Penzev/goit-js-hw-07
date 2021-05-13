const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingridientList = document.querySelector("#ingredients");

ingredients.forEach((elem) => {
  const listEl = document.createElement("li");
  listEl.textContent = elem;
  ingridientList.append(listEl);
});

console.log(ingridientList);
