const otps = new Set(["12345", "67890"]);
const loginForm = document.getElementById("login-form");
const codeInput = document.getElementById("code");
const loginError = document.getElementById("login-error");

const codeForm = document.getElementById("code-form");
const userCodeInput = document.getElementById("user-code");

const tosPopup = document.getElementById("tos-popup");
const tosAcceptCheckbox = document.getElementById("tos-accept");
const tosAcceptButton = document.getElementById("tos-accept-btn");

const restrictedSection = document.getElementById("restricted");
const contentContainer = document.getElementById("content-container");

const restrictedContent = `
  <h3>Exclusive Member Content</h3>
  <p>Welcome to the exclusive area. Here's your content:</p>
  <img src="https://via.placeholder.com/600x300" alt="Exclusive Image" />
  <p>This is an example of how you can add text and images here.</p>
`;

if (window.location.pathname.includes("index.html")) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = codeInput.value;

    if (otps.has(code)) {
      sessionStorage.setItem("loggedIn", "true");
      loginError.classList.add("hidden");
      window.location.href = "restricted.html"; // Redirect to restricted page
    } else {
      loginError.classList.remove("hidden");
    }
  });
} else if (window.location.pathname.includes("restricted.html")) {
  codeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = userCodeInput.value;

    if (otps.has(code)) {
      tosPopup.classList.remove("hidden");
    } else {
      alert("Invalid or used code.");
    }
  });

  tosAcceptCheckbox.addEventListener("change", () => {
    tosAcceptButton.disabled = !tosAcceptCheckbox.checked;
  });

  tosAcceptButton.addEventListener("click", () => {
    if (tosAcceptCheckbox.checked) {
      tosPopup.classList.add("hidden");
      restrictedSection.innerHTML = restrictedContent;
      restrictedSection.classList.remove("section-hidden");
    }
  });
}
