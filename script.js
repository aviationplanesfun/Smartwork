document.addEventListener("DOMContentLoaded", function () {
  // Handling the code form submission
  const codeForm = document.getElementById("code-form");
  const userCode = document.getElementById("user-code");
  const errorMessage = document.getElementById("error-message");

  codeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const code = userCode.value.trim();

    // Check if code is valid (You can replace this with your logic)
    if (code === "1234") {
      showTOSPopup();
    } else {
      errorMessage.classList.remove("hidden");
    }
  });

  // Handling TOS acceptance
  const tosPopup = document.getElementById("tos-popup");
  const tosAcceptButton = document.getElementById("tos-accept-btn");
  const tosCheckbox = document.getElementById("tos-accept");

  tosCheckbox.addEventListener("change", function () {
    tosAcceptButton.disabled = !tosCheckbox.checked;
  });

  tosAcceptButton.addEventListener("click", function () {
    if (tosCheckbox.checked) {
      tosPopup.classList.add("hidden");
      // You can now give access to the restricted content
      alert("Access granted!");
    }
  });

  // Show TOS popup
  function showTOSPopup() {
    tosPopup.classList.remove("hidden");
  }
});
