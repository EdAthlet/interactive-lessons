let svgButton;
let svgClone;
let isPressed = false;
let cloneMoving = false;
let cloneX, cloneY;

function setup() {
  const sidebarWidth = 250;
  const margin = 20;

  // Create the canvas and position it with margin
  const canvas = createCanvas(500, 400);
  canvas.position(sidebarWidth + margin, 50);

  // Select the SVG button by its ID and set up mousePressed
  svgButton = select('#svgButton');
  svgButton.position(sidebarWidth + margin + width / 2 - 50, 50 + height - 100); // Adjust to center it
  svgButton.mousePressed(createClone);
}

function draw() {
  background(220);

  // Draw TV shape (outer border) in black
  fill(0); // Black color for the border
  rectMode(CENTER);
  rect(width / 2, height / 2, 150, 100, 10);

  // Draw TV screen with color based on button press state
  if (isPressed) {
    fill(0, 0, 255);
  } else {
    fill(255, 0, 0);
  }
  rect(width / 2, height / 2, 140, 90, 8);

  // Move the clone if it exists and is in motion
  if (cloneMoving && svgClone) {
    let targetX = sidebarWidth + margin + width / 2 - 50; // Adjusted for SVG size
    let targetY = 50 + height / 2 - 50;

    cloneX = lerp(cloneX, targetX, 0.05);
    cloneY = lerp(cloneY, targetY, 0.05);
    svgClone.position(cloneX, cloneY);

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

  // Set the initial position for the clone
  cloneX = svgButton.position().x;
  cloneY = svgButton.position().y;
  svgClone.position(cloneX, cloneY);

  // Start moving the clone
  cloneMoving = true;
}
