// sidebar.js

document.addEventListener("DOMContentLoaded", () => {
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

    // Find the link that partially matches the current URL and add active class
    links.forEach(link => {
        if (window.location.href.includes(link.href)) {
            link.classList.add("active-link");
        }
    });
}
