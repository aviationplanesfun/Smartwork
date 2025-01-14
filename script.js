document.addEventListener("DOMContentLoaded", function () {
  const codeForm = document.getElementById("code-form");
  const userCode = document.getElementById("user-code");
  const errorMessage = document.getElementById("error-message");

  const tosPopup = document.getElementById("tos-popup");
  const tosAcceptButton = document.getElementById("tos-accept-btn");
  const tosCheckbox = document.getElementById("tos-accept");
  const restrictedContent = document.getElementById("restricted-content");

  let codeEntered = false; // Flag to check if the user has entered the correct code

  // Handling the code form submission
  codeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const code = userCode.value.trim();

    // Check if the code is correct
    if (code === "1234") {
      codeEntered = true; // Set the flag to true once the correct code is entered
      errorMessage.classList.add("hidden");
      showTOSPopup(); // Show TOS popup
    } else {
      errorMessage.classList.remove("hidden");
    }
  });

  // Handling TOS acceptance
  tosCheckbox.addEventListener("change", function () {
    tosAcceptButton.disabled = !tosCheckbox.checked;
  });

  tosAcceptButton.addEventListener("click", function () {
    if (tosCheckbox.checked) {
      // After accepting TOS, show restricted content and hide the TOS popup
      tosPopup.classList.add("hidden");
      restrictedContent.classList.remove("hidden");
    }
  });

  // Show TOS popup
  function showTOSPopup() {
    if (codeEntered) {
      tosPopup.classList.remove("hidden");
    }
  }
});
