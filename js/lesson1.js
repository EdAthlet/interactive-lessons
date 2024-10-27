let switchOn = false; // Initial state of the switch
let switchX = 300, switchY = 200, switchSize = 50; // Switch position and size
let currentPosition = 0; // Position of the current animation
let currentSpeed = 2; // Speed of the current animation

function setup() {
    let canvas = createCanvas(500, 400); // Adjust canvas size for better centering
    canvas.parent("sketch-holder"); // Attach to div
    noStroke();

    // Center switch and animation based on new canvas size
    switchX = width / 2;
    switchY = height / 2;
}

function draw() {
    background(255); // White background

    // Draw the wire
    strokeWeight(4);
    stroke(0); // Black wire
    line(50, switchY, switchX - switchSize / 2, switchY); // Left wire segment
    line(switchX + switchSize / 2, switchY, width - 50, switchY); // Right wire segment

    // Draw the switch
    fill(switchOn ? "green" : "red"); // Green when On, red when Off
    rect(switchX - switchSize / 2, switchY - switchSize / 2, switchSize, switchSize, 5); // Rounded switch

    // Draw "On" or "Off" text inside the switch
    fill(255); // White text
    textAlign(CENTER, CENTER);
    textSize(18);
    text(switchOn ? "On" : "Off", switchX, switchY);

    // Draw current animation if the switch is On
    if (switchOn) {
        fill("blue"); // Blue color for current
        let currentX = map(currentPosition, 0, width - 100, 50, width - 50); // Map position to wire coordinates

        // Ensure current flows only along the wire
        if (currentX < switchX - switchSize / 2 || currentX > switchX + switchSize / 2) {
            ellipse(currentX, switchY, 10, 10); // Draw current as a small circle
        }

        // Update current position for animation
        currentPosition += currentSpeed;
        if (currentPosition > width - 100) {
            currentPosition = 0; // Reset position for continuous animation
        }
    }
}

// Toggle switch state on mouse click
function mousePressed() {
    if (
        mouseX > switchX - switchSize / 2 &&
        mouseX < switchX + switchSize / 2 &&
        mouseY > switchY - switchSize / 2 &&
        mouseY < switchY + switchSize / 2
    ) {
        switchOn = !switchOn; // Toggle switch state
    }
}
