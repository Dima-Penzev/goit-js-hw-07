const listEl = document.querySelectorAll('.item');

console.log(`${listEl.length} категории(й) находится в ul#categories`);

listEl.forEach(elem => {
  console.log(`Категория: ${elem.firstElementChild.innerText}`);
  console.log(`Количество элементов ${elem.lastElementChild.children.length}`);
});
