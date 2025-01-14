const otps = new Set(["12345", "67890"]);
const codeForm = document.getElementById("code-form");
const userCodeInput = document.getElementById("user-code");
const errorMessage = document.getElementById("error-message");

const tosPopup = document.getElementById("tos-popup");
const tosAcceptCheckbox = document.getElementById("tos-accept");
const tosAcceptButton = document.getElementById("tos-accept-btn");

// Code validation on restricted page
codeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = userCodeInput.value;

  if (otps.has(code)) {
    // Show TOS Popup after correct code
    tosPopup.classList.remove("hidden");
  } else {
    // Show error if the code is invalid
    errorMessage.classList.remove("hidden");
  }
});

// Enable accept button only when checkbox is checked
tosAcceptCheckbox.addEventListener("change", () => {
  tosAcceptButton.disabled = !tosAcceptCheckbox.checked;
});

// Handle TOS acceptance
tosAcceptButton.addEventListener("click", () => {
  if (tosAcceptCheckbox.checked) {
    tosPopup.classList.add("hidden");
    alert("Access granted! Welcome to the restricted area.");
    // Here you can display content after accepting TOS
  }
});
