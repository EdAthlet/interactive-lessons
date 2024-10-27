// sidebar.js

document.addEventListener("DOMContentLoaded", () => {
    // Add a timestamp to the URL to prevent caching
    const cacheBuster = new Date().getTime();
    fetch(`side_menu.html?cacheBust=${cacheBuster}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("lesson-menu").innerHTML = data;
            setActiveLink(); // Call after sidebar content loads
        })
        .catch(error => console.error('Error loading sidebar:', error));
});

// Function to highlight the active link
function setActiveLink() {
    console.log("setActiveLink function called"); // Check if function is called
    const links = document.querySelectorAll("#lesson-menu a");
    links.forEach(link => link.classList.remove("active-link"));
    links.forEach(link => {
        // Match based on pathname instead of full URL
        if (link.pathname === window.location.pathname) {
            link.classList.add("active-link");
            console.log(`Active link set for: ${link.pathname}`); // Logs active link set
        }
    });
}
