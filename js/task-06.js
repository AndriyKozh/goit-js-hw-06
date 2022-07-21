const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlurCheck);
inputEl.addEventListener("focus", onInputFocus);

function onInputBlurCheck(event) {
  if (event.currentTarget.value.length === parseInt(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}

function onInputFocus() {
  inputEl.classList.remove("valid", "invalid");
}
