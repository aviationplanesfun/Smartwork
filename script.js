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

// References to sections and links
const homeSection = document.getElementById("home");
const pricingSection = document.getElementById("pricing");
const restrictedSection = document.getElementById("restricted");
const loginSection = document.getElementById("login");

const homeLink = document.getElementById("home-link");
const pricingLink = document.getElementById("pricing-link");
const restrictedLink = document.getElementById("restricted-link");

const loginForm = document.getElementById("login-form");
const otpInput = document.getElementById("otp");
const loginError = document.getElementById("login-error");

const logoutButton = document.getElementById("logout");

// Hide all sections
function hideAllSections() {
  homeSection.classList.add("hidden");
  pricingSection.classList.add("hidden");
  restrictedSection.classList.add("hidden");
  loginSection.classList.add("hidden");
}

// Show a section
function showSection(section) {
  section.classList.remove("hidden");
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
  if (sessionStorage.getItem("loggedIn")) {
    hideAllSections();
    showSection(restrictedSection);
  } else {
    hideAllSections();
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

// Logout
logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem("loggedIn");
  hideAllSections();
  showSection(homeSection);
});

// Initialize default section
document.addEventListener("DOMContentLoaded", () => {
  showSection(homeSection);
});
