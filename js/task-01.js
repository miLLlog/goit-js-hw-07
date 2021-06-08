const categoriesEl = document.querySelectorAll('.item');
console.log(`количество категорий: ${categoriesEl.length}`);

const firstCategory = document.querySelector('h2');
console.log(`Kатегоря: ${firstCategory.textContent}`);

const ElCategory = document.querySelector('.item ul');

const quantityElFirstCategory = ElCategory.children;
console.log(`Количество элементов: ${quantityElFirstCategory.length}`);

const elSecondCategory = document.querySelectorAll('.item');
console.log(`Kатегоря: ${elSecondCategory[1].firstElementChild.textContent}`);

const quantityElSecondCategory = ElCategory.children;
console.log(`Количество элементов: ${elSecondCategory[1].lastElementChild.children.length}`);

const elThirdCategory = document.querySelectorAll('.item');
console.log(`Kатегоря: ${elThirdCategory[2].firstElementChild.textContent}`);

const quantityElThirdCategory = ElCategory.children;
console.log(`Количество элементов: ${elSecondCategory[2].lastElementChild.children.length}`);
