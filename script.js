// Helper functions for cookies
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

// Mock data for OTPs
const otps = new Set(["12345", "67890"]); // Predefined OTPs

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

// ToS confirmation
const confirmTosButton = document.getElementById("confirm-tos");
const tosError = document.getElementById("tos-error");

// Helper function to hide all sections
function hideAllSections() {
  homeSection.classList.remove("visible");
  pricingSection.classList.remove("visible");
  restrictedSection.classList.remove("visible");
  loginSection.classList.remove("visible");
}

// Show a section with animation
function showSection(section) {
  section.classList.add("visible");
}

// Navigation
homeLink.addEventListener("click", () => {
  hideAllSections();
  showSection(homeSection);
});

pricingLink.addEventListener("click", () => {
  hideAllSections();
  showSection(pricingSection);
});

restrictedLink.addEventListener("click", () => {
  hideAllSections();
  if (sessionStorage.getItem("loggedIn")) {
    showSection(restrictedSection);
    tosError.classList.add("hidden");
  } else {
    showSection(loginSection);
  }
});

// Login logic
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const otp = otpInput.value;

  const usedOtps = JSON.parse(getCookie("usedOtps") || "[]");

  if (otps.has(otp) && !usedOtps.includes(otp)) {
    usedOtps.push(otp); // Mark OTP as used
    setCookie("usedOtps", JSON.stringify(usedOtps), 7); // Save for 7 days
    sessionStorage.setItem("loggedIn", "true");
    hideAllSections();
    showSection(restrictedSection);
  } else {
    loginError.classList.remove("hidden");
  }
});

// ToS confirmation
confirmTosButton.addEventListener("click", () => {
  sessionStorage.setItem("tosConfirmed", "true");
  hideAllSections();
  showSection(restrictedSection);
});

// Redirect to home if ToS not confirmed
restrictedLink.addEventListener("click", () => {
  if (!sessionStorage.getItem("tosConfirmed")) {
    tosError.classList.remove("hidden");
    setTimeout(() => {
      hideAllSections();
      showSection(homeSection);
    }, 2000);
  }
});

// Initialize default section
document.addEventListener("DOMContentLoaded", () => {
  showSection(homeSection);
});
