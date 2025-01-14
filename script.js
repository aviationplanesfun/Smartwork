// Function to validate access code
function validateCode() {
    const correctCode = "12345"; // Example code for validation
    const userCode = document.getElementById('access-code').value;

    if (userCode === correctCode) {
        // Show TOS Popup
        document.getElementById('tos-popup').style.display = 'flex';
    } else {
        alert('Incorrect code. Please try again.');
    }
}

// Function to handle TOS acceptance
document.getElementById('accept-tos').addEventListener('click', function() {
    // After accepting, you can redirect to restricted content
    alert('Access granted! You are now entering the restricted area.');
    // Redirect to restricted content (you can replace with actual restricted content URL)
    window.location.href = "restricted.html";
});

