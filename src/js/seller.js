// Get elements
const roleButton = document.getElementById('roleButton');
const roleDropdown = document.getElementById('roleDropdown');

// Function to toggle the dropdown visibility
function toggleDropdown() {
    roleDropdown.style.display = roleDropdown.style.display === 'block' ? 'none' : 'block';
}

// Function to hide dropdown when clicking outside of it
function hideDropdown(event) {
    if (event.target !== roleButton && !roleDropdown.contains(event.target)) {
        roleDropdown.style.display = 'none';
    }
}

// Attach event listeners
roleButton.addEventListener('click', toggleDropdown);
document.addEventListener('click', hideDropdown);
