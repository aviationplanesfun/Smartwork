// Mock data for OTPs
const otps = new Set(["12345", "67890"]); // Predefined OTPs
const usedOtps = new Set();

// References to sections
const homeSection = document.getElementById("home");
const pricingSection = document.getElementById("pricing");
const restrictedSection = document.getElementById("restricted");
const loginSection = document.getElementById("login");

// References to links
const homeLink = document.getElementById("home-link");
const pricingLink = document.getElementById("pricing-link");
const restrictedLink = document.getElementById("restricted-link");

// Login form
const loginForm = document.getElementById("login-form");
const otpInput = document.getElementById("otp");
const loginError = document.getElementById("login-error");

// Helper function to hide all sections
function hideAllSections() {
  homeSection.classList.add("hidden");
  pricingSection.classList.add("hidden");
  restrictedSection.classList.add("hidden");
  loginSection.classList.add("hidden");
}

// Navigation
homeLink.addEventListener("click", () => {
  hideAllSections();
  homeSection.classList.remove("hidden");
});

pricingLink.addEventListener("click", () => {
  hideAllSections();
  pricingSection.classList.remove("hidden");
});

restrictedLink.addEventListener("click", () => {
  hideAllSections();
  if (sessionStorage.getItem("loggedIn")) {
    restrictedSection.classList.remove("hidden");
  } else {
    loginSection.classList.remove("hidden");
  }
});

// Login logic
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const otp = otpInput.value;

  if (otps.has(otp) && !usedOtps.has(otp)) {
    usedOtps.add(otp); // Mark OTP as used
    sessionStorage.setItem("loggedIn", "true");
    hideAllSections();
    restrictedSection.classList.remove("hidden");
  } else {
    loginError.classList.remove("hidden");
  }
});
