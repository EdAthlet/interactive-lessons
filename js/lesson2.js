function setup() {
    createCanvas(500, 400);
  }
  
  function draw() {
    background(220);
  }
  let button;
  let buttonClone;
  let isPressed = false;
  let cloneMoving = false;
  let cloneX, cloneY;
  
  function setup() {
    createCanvas(400, 400);
    
    // Create the button labeled "A" and center it at the bottom of the canvas
    button = createButton('A');
    button.size(30, 30); // Small button
    button.position(width / 2 - button.width / 2, height - 50);
    button.mousePressed(createClone);
  }
  
  function draw() {
    background(220);
    
    // Draw TV shape
    fill(50); // TV border color
    rectMode(CENTER);
    rect(width / 2, height / 2, 150, 100, 10); // TV outer border with rounded corners
    
    // Draw TV screen with color based on button press state
    if (isPressed) {
      fill(0, 255, 0); // Green when pressed
    } else {
      fill(255, 0, 0); // Red when not pressed
    }
    rect(width / 2, height / 2, 130, 80, 8); // TV screen with smaller rounded corners
    
    // Move the clone if it exists and is in motion
    if (cloneMoving && buttonClone) {
      let targetX = width / 2 - buttonClone.width / 2;
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
    cloneX = button.x;
    cloneY = button.y;
    buttonClone.position(cloneX, cloneY);
    cloneMoving = true;
  }
  