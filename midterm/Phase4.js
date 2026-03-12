let grid;

// setup canvas
function setup() {
  createCanvas(400, 400);
  noStroke();
  grid = int(prompt("How many objects do you want in a row?")); //set object number in a row
  if (!grid || grid < 1) grid = 1;
  noLoop();
}

// draw a single heart
function drawHeart(size) {
  beginShape();
  for (let t = 0; t < TWO_PI; t += 0.05) {
    let x = 16 * pow(sin(t), 3);
    let y = -(13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));
    vertex(x * size, y * size);
  }
  endShape(CLOSE);
}

// draw a whole object
function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);

  fill(255, 140, 190); //outer heart
  drawHeart(3);
  fill(255, 190, 230); //inner heart
  drawHeart(2);
  fill(255, 255, 255); //inner circle
  ellipse(0, 0, 18);

  pop();
}

function draw() {
  background(236, 200, 255);

  let cell = width / grid; //single heart size

  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      let x = i * cell + cell / 2;
      let y = j * cell + cell / 2;
      drawObject(x, y, cell / 96);
    }
  }
}