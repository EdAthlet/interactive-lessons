// sidebar.js

// Function to highlight the active link
function setActiveLink() {
    // Get all sidebar links
    const links = document.querySelectorAll("#lesson-menu a");

    // Remove active class from all links
    links.forEach(link => link.classList.remove("active-link"));

    // Find the link that matches the current URL and add active class
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active-link");
        }
    });
}

// Run the function to set the active link on page load
document.addEventListener("DOMContentLoaded", setActiveLink);
