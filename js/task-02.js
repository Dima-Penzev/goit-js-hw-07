const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientList = document.querySelector('#ingredients');

const makeList = array => {
  return array.map(elem => {
    const listEl = document.createElement('li');
    listEl.textContent = elem;
    return listEl;
  });
};

const elements = makeList(ingredients);
ingridientList.append(...elements);
