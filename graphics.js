function scenery() {
  createCanvas(960, 540);
  background(185, 233, 252);
}

//Variables
let x = 100;
let y = 60;
let speed = 0;

//Ice cream cone drawing
function iceCreamCone(x, y) {
  push();
  translate(x, y);
  strokeWeight(2.5);
  stroke(248, 171, 93);
  fill(243, 201, 139);
  triangle(420, 400, 460, 480, 500, 400);

  //lines of the cone
  line(430, 400, 465, 470);
  line(440, 400, 470, 457);
  line(450, 400, 475, 445);
  line(460, 400, 480, 436);
  line(470, 400, 485, 425);
  line(480, 400, 492, 417);

  line(490, 400, 455, 470);
  line(480, 400, 450, 460);
  line(470, 400, 445, 450);
  line(460, 400, 440, 440);
  line(450, 400, 435, 430);
  line(440, 400, 430, 420);

  pop();
}

function movingCone() {
  iceCreamCone(x, y);

  x = x + speed;
  if (keyIsDown(39)) {
    speed = 10;
  } else if (keyIsDown(37)) {
    speed = -10;
  } else {
    speed = 0;
  }
}

//ice cream flavors
function iceCreamStrawberry(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(255, 0, 110);
  ellipse(458, 362, 78, 78);
  ellipse(429, 397, 30, 30);
  ellipse(459, 397, 30, 30);
  ellipse(487, 397, 30, 30);
  pop();
}

function iceCreamMint(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(187, 223, 140);
  ellipse(458, 362, 78, 78);
  ellipse(429, 397, 30, 30);
  ellipse(459, 397, 30, 30);
  ellipse(487, 397, 30, 30);
  pop();
}

function iceCreamVanilla(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(240, 218, 157);
  ellipse(458, 362, 78, 78);
  ellipse(429, 397, 30, 30);
  ellipse(459, 397, 30, 30);
  ellipse(487, 397, 30, 30);
  pop();
}

function iceCreamGrape(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(130, 46, 129);
  ellipse(458, 362, 78, 78);
  ellipse(429, 397, 30, 30);
  ellipse(459, 397, 30, 30);
  ellipse(487, 397, 30, 30);
  pop();
}

function watermelon(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(82, 183, 136);
  arc(100, 100, 100, 100, 0, PI, OPEN);
  fill(249, 65, 68);
  arc(100, 100, 85, 85, 0, PI, OPEN);
  fill(0, 0, 0);
  ellipse(80, 110, 3, 5);
  ellipse(95, 120, 3, 5);
  ellipse(110, 110, 3, 5);
  ellipse(125, 120, 3, 5);
  ellipse(110, 130, 3, 5);
  ellipse(85, 130, 3, 5);
  ellipse(73, 120, 3, 5);
  pop();
}

function chocolateBar(x, y) {
  push();
  translate(x, y);
  stroke(88, 47, 14);
  strokeWeight(2.5);
  fill(127, 79, 36);
  rect(600, 130, 60, 80, 10);
  rect(608, 145, 20, 15, 3);
  rect(633, 145, 20, 15, 3);
  rect(608, 170, 20, 15, 3);
  rect(633, 170, 20, 15, 3);
  fill(255, 0, 0);
  noStroke();
  rect(595, 190, 70, 45, 10);
  fill(255, 255, 255);
  rect(595, 190, 70, 15, 10);
  ellipse(610, 200, 30, 20);
  ellipse(630, 200, 30, 20);
  ellipse(650, 200, 30, 20);
}

function draw() {
  scenery();
  movingCone();
  iceCreamStrawberry(50, 50);
  iceCreamMint(-50, -40);
  iceCreamGrape(-200, -300);
  iceCreamVanilla(-150, -200);
  watermelon();
  chocolateBar();
}
