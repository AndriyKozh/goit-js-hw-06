const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const nameIngredientsAddEl = document.querySelector("#ingredients");

const itemElements = ingredients.map((ingredient) => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add("item");
  return newItem;
});
nameIngredientsAddEl.append(...itemElements);
