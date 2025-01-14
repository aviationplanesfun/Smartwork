document.addEventListener("DOMContentLoaded", function () {
  const codeForm = document.getElementById("code-form-container");
  const userCode = document.getElementById("user-code");
  const submitCodeButton = document.getElementById("submit-code");
  const errorMessage = document.getElementById("error-message");

  const tosPopup = document.getElementById("tos-popup");
  const tosAcceptButton = document.getElementById("tos-accept-btn");
  const tosCheckbox = document.getElementById("tos-accept");
  const restrictedContent = document.getElementById("restricted-content");

  let codeEntered = false; // Flag to track if the correct code is entered

  // Handle code form submission
  submitCodeButton.addEventListener("click", function (event) {
    event.preventDefault();
    const code = userCode.value.trim();

    // Check if the code is correct
    if (code === "1234") {
      codeEntered = true;
      errorMessage.classList.add("hidden");
      showTOSPopup(); // Show TOS popup if code is correct
    } else {
      errorMessage.classList.remove("hidden");
    }
  });

  // Handle TOS acceptance
  tosCheckbox.addEventListener("change", function () {
    tosAcceptButton.disabled = !tosCheckbox.checked;
  });

  tosAcceptButton.addEventListener("click", function () {
    if (tosCheckbox.checked) {
      // Hide TOS popup and show restricted content after accepting TOS
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


