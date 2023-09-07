const notifyButton = document.querySelector(".notify-button");

notifyButton.addEventListener("click", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const errorMessage = document.querySelector(".error-message");
  const validEmailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (emailInput.value === "") {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
    emailInput.style.border = "1px solid hsl(0, 93%, 68%)";
  } else if (!emailInput.value.match(validEmailFormat)) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please provide a valid email";
    emailInput.style.border = "1px solid hsl(0, 93%, 68%)";
  } else {
    errorMessage.style.display = "none";
    emailInput.value = "";
    emailInput.style.border = "1px solid hsl(223, 100%, 88%)";
  }
});
