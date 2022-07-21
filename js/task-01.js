const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.children;

console.log(`Number of categories: ${categoriesItem.length}`);

for (let child of categoriesItem) {
  const categoryTitle = child.querySelector("h2");
  console.log(`Category: ${categoryTitle.textContent}`);

  const categoryEl = child.querySelectorAll("ul > li");
  console.log(`Elements: ${categoryEl.length}`);
}
