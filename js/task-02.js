const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulList = document.querySelector('ul')

const makeLiEl = elem => {
    return elem.map(el => {
        const liEl = document.createElement('li')
        liEl.textContent = el
        return liEl
    });
};

const liElList = makeLiEl(ingredients)

ulList.append(...liElList)