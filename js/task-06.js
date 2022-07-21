const inputEl = document.querySelector("input");
const inputDataLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", noInpunElLength);

function noInpunElLength(event) {
  if (event.currentTarget.value.length === inputDataLength) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
