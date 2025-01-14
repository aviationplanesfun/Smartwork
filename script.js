// Function to validate access code
function validateCode() {
    // Mapping of valid codes to subscription plans
    const codeToPlan = {
        "aVV4nC": "Light", // 1
        "s7cEmb": "Light", // 2
        "cUf72q": "Light", // 3
        "oBcaiT": "Light", // 4
        "DKqRzU": "Elite", // 5
        "0BW5Q9": "Light", // 6
        "Tc8iZu": "Light", // 7
        "qh3fIY": "Light", // 8
        "URYvvn": "Light", // 9
        "AoE1Gq": "Light", // 10
        "hbFqQT": "Classic", // 11
        "T3gxlp": "Classic", // 12
        "5IqGBj": "Classic", // 13
        "Q2r2hm": "Classic", // 14
        "hWQ9A6": "Classic", // 15
        "H1UNZo": "Classic", // 16
        "9n2bjy": "Classic", // 17  
        "ce1OnF": "Classic", // 18    
        "eaWPZn": "Classic", // 19
        "6x8FEg": "Classic", // 20
        "DxwE1n": "Classic", // 21
        "2MpMTd": "Classic", // 22
        "XMP5Aq": "Classic", // 23 
        "5fXdS7": "Classic", // 24  
        "jJO2X9": "Classic", // 25
        "tCCfbj": "Classic", // 26  
        "McFP3K": "Classic", // 27  
        "DDa000": "Classic", // 28    
        "q4DkWZ": "Classic", // 29
        "169QFk": "Classic", // 30
        "gSYPEx": "Elite", // 31
        "czz1cg": "Elite", // 32
        "N6Qy5N": "Elite", // 33
        "LtvZSg": "Elite", // 34  
        "yBT8t6": "Elite", // 35
        "G31LJc": "Elite", // 36  
        "XRpAoe": "Elite", // 37  
        "CcjFFl": "Elite", // 38    
        "cqvZ7B": "Elite", // 39
        "fCr0ui": "Elite" // 40
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
