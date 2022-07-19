const decrementEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const incrementEl = document.querySelector(
  '#counter button[data-action="increment"]'
);

const spanEl = document.querySelector("#value");

decrementEl.addEventListener("click", onDecrementBattom);
incrementEl.addEventListener("click", onIncrementTop);

let counterValue = 0;

function onDecrementBattom(a) {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

function onIncrementTop() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
console.log(counterValue);
