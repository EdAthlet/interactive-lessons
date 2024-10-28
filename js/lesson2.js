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

  // Draw TV shape in the center of the canvas
  fill(0); 
  rectMode(CENTER);
  rect(width / 2, height / 2, 150, 100, 5); 

  // Draw TV screen with color based on button press state
  
  if (isPressed) {
    fill(0, 0, 255); // blue
  } else {
    fill(255, 0, 0); // red
  }
  rect(width / 2, height / 2, 140, 90, 5);

  // Move the clone if it exists and is in motion
  if (cloneMoving && buttonClone) {
    let targetX = 250 + 20 + width / 2 - buttonClone.width / 2;
    let targetY = 50 + height / 2 - buttonClone.height / 2;

    // Log current position and target to debug
    console.log(`Current: (${cloneX}, ${cloneY}), Target: (${targetX}, ${targetY})`);

    // Move the clone towards the center of the TV
    cloneX = lerp(cloneX, targetX, 0.05);
    cloneY = lerp(cloneY, targetY, 0.05);
    buttonClone.position(cloneX, cloneY);

    // Stop moving if close enough to the target
    if (dist(cloneX, cloneY, targetX, targetY) < 1) {
      console.log("Clone reached target");
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
  console.log("Clone created and moving up");
}
