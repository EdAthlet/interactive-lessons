let button;
let buttonClone;
let isPressed = false;
let cloneMoving = false;
let cloneX, cloneY;

function setup() {
  // Create the canvas and shift it 250px to the right to make room for the sidebar
  const canvas = createCanvas(500, 400);
  canvas.position(250, 0); // Canvas positioned with 250px offset from the left

  // Create the button labeled "A" and position it relative to the canvas
  button = createButton('A');
  button.size(30, 30); // Small button
  button.position(250 + width / 2 - button.width / 2, height - 50); // Center button on the canvas with sidebar offset
  button.mousePressed(createClone);
}

function draw() {
  background(220);

  // Draw TV shape in the center of the canvas
  fill(50); // TV border color
  rectMode(CENTER);
  rect(width / 2, height / 2, 150, 100, 10); // Centered on canvas without extra offset

  // Draw TV screen with color based on button press state
  if (isPressed) {
    fill(0, 255, 0); // Green when pressed
  } else {
    fill(255, 0, 0); // Red when not pressed
  }
  rect(width / 2, height / 2, 130, 80, 8); // Centered on canvas without offset

  // Move the clone if it exists and is in motion
  if (cloneMoving && buttonClone) {
    let targetX = 250 + width / 2 - buttonClone.width / 2;
    let targetY = height / 2 - buttonClone.height / 2;

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

  // Set the clone's initial position and start moving it
  cloneX = 250 + width / 2 - buttonClone.width / 2;
  cloneY = height - 50;
  buttonClone.position(cloneX, cloneY);
  cloneMoving = true;
}
