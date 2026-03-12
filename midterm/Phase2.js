// setup canvas
function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop();
}

// draw a single heart
function drawHeart(cx, cy, size) {
  beginShape();

  for (let t = 0; t < TWO_PI; t += 0.05) {
    let x = 16 * pow(sin(t), 3);
    let y = -(13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));

    vertex(cx + x * size, cy + y * size);
  }

  endShape(CLOSE);
}

// draw a whole object
function draw() {
  background(236, 200, 255);

  fill(255, 140, 190); //outer heart
  drawHeart(200, 200, 3);

  fill(255, 190, 230); //inner heart
  drawHeart(200, 200, 2);

  fill(255, 255, 255); //inner circle
  ellipse(200, 200, 18);
}