let svgButton;
let svgClone;
let isPressed = false;
let cloneMoving = false;
let cloneX, cloneY;
const sidebarWidth = 250;
const margin = 20;

function setup() {
  // Create the canvas and position it with margin
  const canvas = createCanvas(500, 400);
  canvas.position(sidebarWidth + margin, 50);

  // Select the SVG button by its ID and set up mousePressed
  svgButton = select('#svgButton');
  
  if (svgButton) {
    svgButton.position(sidebarWidth + margin + width / 2 - 50, 50 + height - 100); // Adjust to center it
    svgButton.mousePressed(createClone);
  } else {
    console.error("SVG button with ID 'svgButton' not found. Ensure it exists in the HTML.");
  }
}

function draw() {
  background(220);

  // Draw TV shape (outer border) in black
  fill(0);
  rectMode(CENTER);
  rect(width / 2, height / 2, 150, 100, 10);

  // Draw TV screen with color based on button press state
  fill(isPressed ? 'blue' : 'red');
  rect(width / 2, height / 2, 140, 90, 8);

  // Move the clone if it exists and is in motion
  if (cloneMoving && svgClone) {
    let targetX = sidebarWidth + margin + width / 2 - 50; // Center of the canvas for SVG size
    let targetY = 50 + height / 2 - 50;

    // Smooth movement towards target position
    cloneX = lerp(cloneX, targetX, 0.05);
    cloneY = lerp(cloneY, targetY, 0.05);
    svgClone.position(cloneX, cloneY);

    // Stop moving if close enough to the target
    if (dist(cloneX, cloneY, targetX, targetY) < 1) {
      cloneMoving = false;
    }
  }
}

function createClone() {
  isPressed = !isPressed;

  // Clone the SVG button by copying it if it doesn't already exist
  if (!svgClone) {
    svgClone = svgButton.elt.cloneNode(true); // Clone the original SVG
    document.body.appendChild(svgClone); // Append it to the DOM
    svgClone = select(svgClone); // Wrap in p5 element for easy positioning
  }

  // Set the clone's initial position to match the original button
  cloneX = svgButton.position().x;
  cloneY = svgButton.position().y;
  svgClone.position(cloneX, cloneY);

  // Start moving the clone
  cloneMoving = true;
}
