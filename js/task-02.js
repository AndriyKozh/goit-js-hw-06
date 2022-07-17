const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const nameIngredientsAddEl = document.querySelector("#ingredients");
console.log(nameIngredientsAddEl);

const potatoesEl = document.createElement("li");
potatoesEl.classList.add("item");
potatoesEl.textContent = "Potatoes";
console.log(potatoesEl);

const mushroomsEl = document.createElement("li");
mushroomsEl.classList.add("item");
mushroomsEl.textContent = "Mushrooms";
console.log(mushroomsEl);

const garlicEl = document.createElement("li");
garlicEl.classList.add("item");
garlicEl.textContent = "Garlic";
console.log(garlicEl);

const tomatosEl = document.createElement("li");
tomatosEl.classList.add("item");
tomatosEl.textContent = " Tomatos";
console.log(tomatosEl);

const herbsEl = document.createElement("li");
herbsEl.classList.add("item");
herbsEl.textContent = "Herbs";
console.log(herbsEl);

const condimentsEl = document.createElement("li");
condimentsEl.classList.add("item");
condimentsEl.textContent = "Condiments";
console.log(condimentsEl);

nameIngredientsAddEl.append(
  potatoesEl,
  mushroomsEl,
  garlicEl,
  tomatosEl,
  herbsEl,
  condimentsEl
);
