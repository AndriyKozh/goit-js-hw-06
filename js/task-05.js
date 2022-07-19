const refs = {
  inputEl: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputElement);
// refs.inputEl.addEventListener("input", onInputElement);

function onInputElement(event) {
  refs.span.textContent = event.currentTarget.value;
}
