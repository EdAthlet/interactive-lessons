function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  let switchOn = false; // Initial state of the switch
  let switchX = 300, switchY = 200, switchSize = 50; // Switch position and size
  let currentPosition = 0; // Position of the current animation
  let currentSpeed = 2; // Speed of the current animation
  
  function setup() {
    createCanvas(600, 400);
    noStroke();
  }
  
  function draw() {
    background(255); // White background
  
    // Draw the wire
    strokeWeight(4);
    stroke(0); // Black wire
    line(50, 200, switchX - switchSize / 2, 200); // Left wire segment
    line(switchX + switchSize / 2, 200, 550, 200); // Right wire segment
    
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
      let currentX = map(currentPosition, 0, width - 100, 50, 550); // Map position to wire coordinates
      
      // Ensure current flows only along the wire
      if (currentX < switchX - switchSize / 2 || currentX > switchX + switchSize / 2) {
        ellipse(currentX, 200, 10, 10); // Draw current as a small circle
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
  