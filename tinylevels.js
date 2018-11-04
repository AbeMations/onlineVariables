function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  width = window.innerWidth;
  height = window.innerHeight;
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);
  fill(255);
  rect(mouseX, mouseY, 50, 50);
}
