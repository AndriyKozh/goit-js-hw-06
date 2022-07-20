const itemEl = document.querySelectorAll("h2");
console.log(`Number of categories: ${itemEl.length}`);

console.log("");
const refs = {
  nameContentEl: document.querySelectorAll("li.item"),
  itemElements: document.querySelectorAll(".item ul"),
};

const animalsEl = refs.nameContentEl;
const animalEl = animalsEl[0].firstElementChild.textContent;
console.log(`Category: ${animalEl}`);

const numbAnimalsEL = refs.itemElements;
const numbersAnimalsEL = numbAnimalsEL[0].children.length;
console.log(`Elements: ${numbersAnimalsEL}`);

console.log("");

const productsEl = refs.nameContentEl;
const productEl = productsEl[1].firstElementChild.textContent;
console.log(`Category: ${productEl}`);

const numbProductsEL = refs.itemElements;
const numbersProductsEL = numbProductsEL[1].children.length;
console.log(`Elements: ${numbersProductsEL}`);

console.log("");

const technologiesEl = refs.nameContentEl;
const technologieEl = technologiesEl[2].firstElementChild.textContent;
console.log(`Category: ${technologieEl}`);

const numbTechnologiesEL = refs.itemElements;
const numbersTechnologiesEL = numbTechnologiesEL[2].children.length;
console.log(`Elements: ${numbersTechnologiesEL}`);
