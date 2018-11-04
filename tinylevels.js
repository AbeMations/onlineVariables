var width = window.innerWidth;
var height = window.innerHeight;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
}

function draw() {
  background(0);
  rect(mouseX, mouseY, 50, 50);
}
