const itemEl = document.querySelectorAll("h2");
console.log(`Number of categories: ${itemEl.length}`);

console.log("");

const animalsEl = document.querySelectorAll("li.item");
const animalEl = animalsEl[0].firstElementChild.textContent;
console.log(`Category: ${animalEl}`);

const numbAnimalsEL = document.querySelectorAll(".item ul");
const numbersAnimalsEL = numbAnimalsEL[0].children.length;
console.log(`Elements: ${numbersAnimalsEL}`);

console.log("");

const productsEl = document.querySelectorAll("li.item");
const productEl = productsEl[1].firstElementChild.textContent;
console.log(`Category: ${productEl}`);

const numbProductsEL = document.querySelectorAll(".item ul");
const numbersProductsEL = numbProductsEL[1].children.length;
console.log(`Elements: ${numbersProductsEL}`);

console.log("");

const technologiesEl = document.querySelectorAll("li.item");
const technologieEl = technologiesEl[2].firstElementChild.textContent;
console.log(`Category: ${technologieEl}`);

const numbTechnologiesEL = document.querySelectorAll(".item ul");
const numbersTechnologiesEL = numbTechnologiesEL[2].children.length;
console.log(`Elements: ${numbersTechnologiesEL}`);
