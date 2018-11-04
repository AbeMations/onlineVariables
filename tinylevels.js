var width;
var height;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  width = window.innerWidth;
  height = window.innerHeight;
  noStroke();
}

function draw() {
  background(0);
  rect(mouseX, mouseY, 50, 50);
}
