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

//popcorn drawing
function popcornDrawing(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(255, 225, 145);
  ellipse(100, 100, 20);
  ellipse(115, 93, 20);
  ellipse(132, 95, 20);
  ellipse(149, 91, 25);
  ellipse(167, 94, 20);
  ellipse(130, 77, 25);
  ellipse(151, 76, 20);
  ellipse(108, 78, 23);
  pop();

  push();
  translate(x, y);
  noStroke();
  rect(100, 100, 15, 80);
  rect(129, 100, 15, 80);
  rect(155, 100, 15, 80);
  fill(255, 0, 0);
  rect(114, 100, 15, 80);
  rect(144, 100, 15, 80);
  pop();
}

//lollipop drawing
function lollipopDrawing(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(255, 255, 255);
  rect(95, 245, 10, 53, 2);
  pop();
  
  push();
  translate(x, y);
  noStroke();
  fill(225, 18, 153);
  ellipse(100, 231, 40);
  pop();

  push();
  translate(x, y);
  noStroke();
  fill(255, 95, 158);
  rect(78, 227, 44, 10, 5);
  pop();
}

//level panel
function levelPanel() {
  push();
  fill(255, 255, 255);
  rect(400, 0, 150, 50, 20);
  stroke(190, 225, 230);
  strokeWeight(2);
  rect(410, 8, 130, 35, 20);
  pop();
}

//panel for the ice cream model
function randomIcecreamPattern() {
  push();
  noStroke();
  fill(255, 255, 255);
  rect(860, 0, 100, 200, 20);
  stroke(190, 225, 230);
  strokeWeight(2);
  rect(870, 10, 80, 180, 20);
  pop();
}

//next level screen
function screenNextLevel() {
  push();
  fill(190, 225, 230);
  rect(380, 240, 200, 80, 20);
  stroke(255, 255, 255);
  strokeWeight(2);
  rect(390, 250, 180, 60, 20);
  noStroke();
  textSize(30);
  fill(255, 255, 255);
  text("Next level🍦", 400, 290);
  pop();
}

function clouds(x, y) {
  push();
  translate(x, y);
  fill(255, 255, 255);
  noStroke();
  ellipse(100, 100, 30);
  ellipse(120, 100, 30);
  ellipse(140, 100, 30);
  pop();
}


/*function draw() {
  scenery();
  movingCone();
  iceCreamStrawberry(50, 50);
  iceCreamMint(-50, -40);
  iceCreamGrape(-200, -300);
  iceCreamVanilla(-150, -200);
  watermelon();
  chocolateBar();
  popcornDrawing();
  levelPanel();
  randomIcecreamPattern();
  lollipopDrawing();
  screenNextLevel();
}*/

//start screen
function startScreen() {
  
  scenery();
  push();
  noStroke();
  fill(255, 255, 255);
  rect(330, 245, 300, 50, 10);
  pop();
  
  push();
  fill(0, 0, 0);
  textSize(25);
  text("Press any key to start", 355, 280);
  pop();

  push();
  noFill();
  stroke (185, 233, 252);
  rect(340, 250, 280, 40, 10);
  pop();

  clouds();
  clouds(75, 162);
  clouds(750, 262);
  clouds(494, 312);
  clouds(660, 140);
  clouds(129, 327);
  clouds(797, -46);

  iceCreamCone(-280, -280);
  iceCreamStrawberry(-279, -280);
  iceCreamCone(319, 11);
  iceCreamMint(319, 11);
  watermelon(600, 50);
  chocolateBar(-360, 190);
  iceCreamCone(320, -140);
  iceCreamVanilla(320, -140);
  lollipopDrawing(350, -39);
  popcornDrawing(1070, -170);
}

//startScreen();

function instructionsPanel() {
  scenery();
  push();
  fill(0, 0, 0);
  textSize(25);
  text("Move the cone with the left and right arrows", 230, 280);
  pop();

  push();
  fill(255, 255, 255);
  noStroke();
  rect(270, 380, 100, 50, 10);
  rect(540, 380, 100, 50, 10);
  pop();

  push();
  noFill();
  stroke (185, 233, 252);
  rect(275, 385, 90, 40, 10);
  rect(545, 385, 90, 40, 10);
  pop();

  randomIcecreamPattern();

  push();
  fill(0, 0, 0);
  noStroke();
  triangle(305, 404, 328, 393, 328, 415);
  triangle(604, 404, 576, 393, 577, 415);
  pop();

  iceCreamCone(0, -50);
}

//instructionsPanel();

function loseScreen() {
  scenery();

  clouds();
  clouds(75, 162);
  clouds(750, 262);
  clouds(494, 312);
  clouds(660, 140);
  clouds(129, 327);
  clouds(797, -46);
  
  push();
  fill(0, 0, 0);
  textSize(25);
  text("you lost", 430, 230);
  text("better luck next time", 370, 310);
  pop();

  

}

//loseScreen();