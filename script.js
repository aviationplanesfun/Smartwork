// Function to validate access code
function validateCode() {
    // Mapping of valid codes to subscription plans
    const codeToPlan = {
        "aVV4nC": "Light",   // Light plan code
        "s7cEmb": "Light",  // Classic plan code
        "cUf72q": "Classic",    // Elite plan code
        "oBcaiT": "Classic",    // Light plan code
        "DKqRzU": "Elite"   // Classic plan code
    };

    const userCode = document.getElementById('access-code').value;

    // Check if the entered code is in the mapping
    if (codeToPlan[userCode]) {
        // Store the user's plan in localStorage
        localStorage.setItem('userPlan', codeToPlan[userCode]);
        
        // Show TOS Popup
        document.getElementById('tos-popup').style.display = 'flex';
    } else {
        alert('Incorrect code. Please try again.');
    }
}

// Function to handle TOS acceptance
document.getElementById('accept-tos').addEventListener('click', function() {
    // Hide TOS popup
    document.getElementById('tos-popup').style.display = 'none';

    // Store TOS acceptance status in localStorage
    localStorage.setItem('hasAcceptedTOS', 'true');

    // Redirect to restricted area after TOS acceptance
    window.location.href = 'restricted.html';
});
