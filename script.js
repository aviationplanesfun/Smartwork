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
    // Hide TOS popup
    document.getElementById('tos-popup').style.display = 'none';
    
    // Show the post section
    document.getElementById('post-section').classList.remove('hidden');
    document.getElementById('posts-section').classList.remove('hidden');
});

// Array to store posts
let posts = [
    {
        id: 1,
        title: "Welcome to Smartwork!",
        content: "This is your first post in the restricted area. You can modify the posts directly in the code.",
        timestamp: new Date().toLocaleString()
    },
    {
        id: 2,
        title: "New Features Coming Soon",
        content: "We're working on adding new features to Smartwork. Stay tuned for updates.",
        timestamp: new Date().toLocaleString()
    }
];

// Function to display posts on both homepage and restricted page
function displayPosts() {
    const postsContainer = document.getElementById('posts-container');
    const postsSection = document.getElementById('posts-section');
    postsContainer.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h4>${post.title} - ${post.timestamp}</h4>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Call the displayPosts function to render the posts when the page loads
displayPosts();
