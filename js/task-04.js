let counterValue = 0;
const decrementEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const incrementEl = document.querySelector(
  '#counter button[data-action="increment"]'
);

const spanEl = document.querySelector("#value");

decrementEl.addEventListener("click", onDecrementBattom);
incrementEl.addEventListener("click", onIncrementTop);

function onDecrementBattom() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

function onIncrementTop() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
