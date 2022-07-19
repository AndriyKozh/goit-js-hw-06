const refs = {
  textEl: document.querySelector("#text"),
  rangeEL: document.querySelector("#font-size-control"),
};

console.log(refs.textEl.textContent);
refs.textEl.style.fontSize = refs.rangeEL.value;

const upFont = refs.rangeEL.addEventListener("click", upFontFn);

function upFontFn(event) {
  refs.textEl.style.fontSize = event.currentTarget.value + "px";
}
