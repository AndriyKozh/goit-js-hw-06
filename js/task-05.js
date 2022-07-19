const refs = {
  inputEl: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputElement);
// refs.inputEl.addEventListener("input", onInputElement);
console.log(refs.span.textContent);
function onInputElement(event) {
  if (event.currentTarget.value) {
    refs.span.textContent = event.currentTarget.value;
  } else {
    refs.span.textContent = "Anonymous";
  }
}
