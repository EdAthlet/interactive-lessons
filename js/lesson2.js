let button;
let buttonClone;
let isPressed = false;
let cloneMoving = false;
let cloneX, cloneY;

function setup() {
  const sidebarWidth = 250;
  const margin = 20;

  // Create the canvas and position it with margin
  const canvas = createCanvas(500, 400);
  canvas.position(sidebarWidth + margin, 50); 

  // Create the main button labeled "A" and center it at the bottom of the canvas
  button = createButton('A');
  button.size(30, 30);
  button.position(sidebarWidth + margin + width / 2 - button.width / 2, 50 + height - button.height - 20);
  button.mousePressed(createClone);
}

function draw() {
  background(220);

  // Draw TV shape (outer border) in black
  fill(0); // Black color for the border
  rectMode(CENTER);
  rect(width / 2, height / 2, 150, 100, 10); // Outer black rectangle with rounded corners

  // Draw TV screen with color based on button press state
  if (isPressed) {
    fill(0, 0, 255); // Blue color when pressed
  } else {
    fill(255, 0, 0); // Red color when not pressed
  }
  rect(width / 2, height / 2, 140, 90, 8); // Inner colored rectangle, slightly smaller to create a thinner black border

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

function createClone() {
  isPressed = !isPressed;

  // Create the clone button if it doesn't already exist
  if (!buttonClone) {
    buttonClone = createButton('A');
    buttonClone.size(30, 30);
  }

  // Set the clone's initial position at the bottom center of the canvas
  cloneX = 250 + 20 + width / 2 - buttonClone.width / 2;
  cloneY = 50 + height - button.height - 20;
  buttonClone.position(cloneX, cloneY);

  // Start moving the clone
  cloneMoving = true;
}
