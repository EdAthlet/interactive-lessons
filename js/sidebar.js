// sidebar.js

// Load sidebar content and set active link
document.addEventListener("DOMContentLoaded", () => {
    // Load sidebar content from side_menu.html
    fetch("side_menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("lesson-menu").innerHTML = data;

            // After loading sidebar, highlight the active link
            setActiveLink();
        })
        .catch(error => console.error('Error loading sidebar:', error));
});

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
