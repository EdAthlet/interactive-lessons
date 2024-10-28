let button;
let buttonClone;
let isPressed = false;
let cloneMoving = false;
let cloneX, cloneY;

function setup() {
  // Define the sidebar width and desired margin
  const sidebarWidth = 250;
  const margin = 20;

  // Create the canvas and position it with additional margin
  const canvas = createCanvas(500, 400);
  canvas.position(sidebarWidth + margin, 50); // Position canvas with margin

  // Create the main button labeled "A" and center it at the bottom of the canvas
  button = createButton('A');
  button.size(30, 30); // Small button
  button.position(sidebarWidth + margin + width / 2 - button.width / 2, 50 + height - button.height - 20); // Center button on canvas
  button.mousePressed(createClone);
}

function draw() {
  background(220);

  // Draw TV shape in the center of the canvas
  fill(50); // TV border color
  rectMode(CENTER);
  rect(width / 2, height / 2, 150, 100, 10); // Centered on canvas

  // Draw TV screen with color based on button press state
  if (isPressed) {
    fill(0, 255, 0); // Green when pressed
  } else {
    fill(255, 0, 0); // Red when not pressed
  }
  rect(width / 2, height / 2, 130, 80, 8); // Centered on canvas

  // Move the clone if it exists and is in motion
  if (cloneMoving && buttonClone) {
    let targetX = sidebarWidth + margin + width / 2 - buttonClone.width / 2;
    let targetY = 50 + height / 2 - buttonClone.height / 2;

    // Move the clone towards the center of the TV
    cloneX = lerp(cloneX, targetX, 0.05);
    cloneY = lerp(cloneY, targetY, 0.05);
    buttonClone.position(cloneX, cloneY);

    // Stop moving if close enough to the target
    if (dist(cloneX, cloneY, targetX, targetY) < 1) {
      cloneMoving = false;
    }
  }
}

// Function to toggle button press state and create a moving clone
function createClone() {
  isPressed = !isPressed;

  // Create the clone button if it doesn't already exist
  if (!buttonClone) {
    buttonClone = createButton('A');
    buttonClone.size(30, 30);
  }

  // Set the clone's initial position at the bottom center of the canvas
  cloneX = 250 + margin + width / 2 - buttonClone.width / 2;
  cloneY = 50 + height - button.height - 20; // Positioned above main button
  buttonClone.position(cloneX, cloneY);
  cloneMoving = true; // Start moving the clone
}
