const otps = new Set(["12345", "67890"]);
const loginForm = document.getElementById("login-form");
const codeInput = document.getElementById("code");
const loginError = document.getElementById("login-error");

const tosSection = document.getElementById("tos");
const tosCheckbox = document.getElementById("tos-check");
const proceedButton = document.getElementById("proceed");

const restrictedSection = document.getElementById("restricted");
const contentContainer = document.getElementById("content-container");
const logoutButton = document.getElementById("logout");

const tosPopup = document.getElementById("tos-popup");
const tosAcceptCheckbox = document.getElementById("tos-accept");
const tosAcceptButton = document.getElementById("tos-accept-btn");

// Predefined content for the restricted page
const restrictedContent = `
  <h3>Exclusive Member Content</h3>
  <p>Welcome to the exclusive area. Here's your content:</p>
  <img src="https://via.placeholder.com/600x300" alt="Exclusive Image" />
  <p>This is an example of how you can add text and images here.</p>
`;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const code = codeInput.value;

  if (otps.has(code)) {
    sessionStorage.setItem("loggedIn", "true");
    loginError.classList.add("hidden");
    hideAllSections();
    tosPopup.classList.remove("hidden");
  } else {
    loginError.classList.remove("hidden");
  }
});

tosAcceptCheckbox.addEventListener("change", () => {
  if (tosAcceptCheckbox.checked) {
    tosAcceptButton.disabled = false;
  } else {
    tosAcceptButton.disabled = true;
  }
});

tosAcceptButton.addEventListener("click", () => {
  if (tosAcceptCheckbox.checked) {
    hideAllSections();
    restrictedSection.classList.remove("section-hidden");
    restrictedSection.classList.add("section-visible");
    contentContainer.innerHTML = restrictedContent;
    tosPopup.classList.add("hidden");
  }
});

logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem("loggedIn");
  hideAllSections();
  document.getElementById("home").classList.remove("section-hidden");
  document.getElementById("home").classList.add("section-visible");
});

function hideAllSections() {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("section-hidden");
  });
}
