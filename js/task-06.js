const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const dataLength = parseInt(validationInput.getAttribute("data-length"));
  const enteredLength = validationInput.value.length;

  if (enteredLength === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
