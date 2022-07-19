const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const nameIngredientsAddEl = document.querySelector("#ingredients");

const itemElements = ingredients.map((name) => `<li>${name}<li>`).join("");

nameIngredientsAddEl.insertAdjacentHTML("beforeend", itemElements);
