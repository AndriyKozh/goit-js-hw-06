const submitEl = document.querySelector("form");

submitEl.addEventListener("submit", noEventBtn);

function noEventBtn(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    console.log("Please fill in all the fields!");
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  }

  event.currentTarget.reset();
}
