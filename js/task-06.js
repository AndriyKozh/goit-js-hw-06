const inputEl = document.querySelector("input");
const inputDataLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", noInpunElLength);

function noInpunElLength(event) {
  if (event.target.value.length === inputDataLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
