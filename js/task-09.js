function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector(".change-color");

const colorName = document.querySelector(".color");

const bodyFon = document.querySelector("body");

colorBtn.addEventListener("click", onChangecColor);

function onChangecColor() {
  const result = (bodyFon.style.backgroundColor = getRandomHexColor());
  colorName.innerHTML = result;
}
