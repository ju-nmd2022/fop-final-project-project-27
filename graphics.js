import { Cone } from "./cone";
import { IceCream } from "./icecream";
import { Panel } from "./randomPanel";

function scenery() {
  background(185, 233, 252);
  clouds();
  clouds(75, 162);
  clouds(750, 262);
  clouds(494, 312);
  clouds(660, 140);
  clouds(129, 327);
  clouds(797, -46);
}

let cone;
let panel;
let iceCreams = [];
let screen = 0;
let level = 1;
// https://happycoding.io/tutorials/p5js/arrays
// https://www.youtube.com/watch?v=_H9JIwWP7HQ
// debug chatgpt
// we've got help from Garrit to fix the y position problem
function setup() {
  createCanvas(960, 540);
  cone = new Cone(400, 460);
  panel = new Panel(900, 120);
}

//Variables
let x = 100;
let y = 60;
let speed = 0;
// let itemsFalling = [];

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

  //move the cone with the arrow keys
  x = x + speed;
  if (keyIsDown(39)) {
    speed = 15;
  } else if (keyIsDown(37)) {
    speed = -10;
  } else {
    speed = 0;
  }
  //boundary on both sides of the screen
  if (x > 450) {
    x = 450;
  } else if (x < -415) {
    x = -415;
  }
}

//ice cream flavors
function iceCreamStrawberry(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(255, 0, 110);
  ellipse(x, y, 78, 78);
  ellipse(x - 29, y + 35, 30, 30);
  ellipse(x, y + 35, 30, 30);
  ellipse(x + 29, y + 35, 30, 30);
  pop();
}

function iceCreamMint(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(187, 223, 140);
  ellipse(x, y, 78, 78);
  ellipse(x - 29, y + 35, 30, 30);
  ellipse(x, y + 35, 30, 30);
  ellipse(x + 29, y + 35, 30, 30);
  pop();
}

function iceCreamVanilla(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(240, 218, 157);
  ellipse(x, y, 78, 78);
  ellipse(x - 29, y + 35, 30, 30);
  ellipse(x, y + 35, 30, 30);
  ellipse(x + 29, y + 35, 30, 30);
  pop();
}

function iceCreamGrape(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(130, 46, 129);
  ellipse(x, y, 78, 78);
  ellipse(x - 29, y + 35, 30, 30);
  ellipse(x, y + 35, 30, 30);
  ellipse(x + 29, y + 35, 30, 30);
  pop();
}

function watermelon(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(82, 183, 136);
  arc(x, y, 100, 100, 0, PI, OPEN);
  fill(249, 65, 68);
  arc(x, y, 85, 85, 0, PI, OPEN);
  fill(0, 0, 0);
  ellipse(x - 20, y + 10, 3, 5);
  ellipse(x - 5, y + 20, 3, 5);
  ellipse(x + 10, y + 10, 3, 5);
  ellipse(x + 25, y + 20, 3, 5);
  ellipse(x + 10, y + 30, 3, 5);
  ellipse(x - 15, y + 30, 3, 5);
  ellipse(x - 27, y + 20, 3, 5);
  pop();
}

function chocolateBar(x, y) {
  push();
  translate(x, y);
  stroke(88, 47, 14);
  strokeWeight(2.5);
  fill(127, 79, 36);
  rect(0, 0, 60, 80, 10);
  rect(8, 15, 20, 15, 3);
  rect(33, 15, 20, 15, 3);
  rect(8, 40, 20, 15, 3);
  rect(33, 40, 20, 15, 3);
  fill(255, 0, 0);
  noStroke();
  rect(-5, 60, 70, 45, 10);
  fill(255, 255, 255);
  rect(-5, 60, 70, 15, 10);
  ellipse(10, 70, 30, 20);
  ellipse(30, 70, 30, 20);
  ellipse(50, 70, 30, 20);
  pop();
}

// //popcorn drawing
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
  noStroke();
  rect(400, 0, 150, 50, 20);
  stroke(190, 225, 230);
  strokeWeight(2);
  rect(410, 8, 130, 35, 20);
  fill(0,0,0);
  textSize(20);
  text("Level",440, 33);
  text(level,500, 33);
  pop();
}

//panel for the ice cream model
function randomIcecreamPattern() {
  push();
  noStroke();
  fill(255, 255, 255);
  rect(840, 0, 115, 260, 20);
  stroke(190, 225, 230);
  strokeWeight(2);
  noFill();
  rect(849, 14, 100, 230, 20);
  pop();
}

//next level screen
function screenNextLevel() {
  push();
  noStroke();
  fill(202, 186, 219);
  rect(380, 240, 200, 80, 20);
  stroke(255, 255, 255);
  strokeWeight(2);
  rect(390, 250, 180, 60, 20);
  noStroke();
  textSize(30);
  fill(255, 255, 255);
  text("Next level🍦", 400, 290);
  clouds(313, 70);
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
  stroke(185, 233, 252);
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

//Instructions screen
function instructions() {
  scenery();

  push();
  fill(202, 186, 219);
  rect(370, 95, 460, 50, 9);
  rect(220, 248, 500, 48, 9);
  stroke(255, 255, 255);
  rect(370, 95, 460, 50, 9);
  rect(220, 248, 500, 48, 9);
  pop();

  push();
  fill(255, 255, 255);
  textSize(25);
  text("Move the cone with the left and right arrows", 230, 280);
  textSize(18);
  text("Follow the pattern shown to move on to the next level ➡️", 375, 127);
  pop();

  push();
  fill(255, 255, 255);
  noStroke();
  rect(270, 380, 100, 50, 10);
  rect(540, 380, 100, 50, 10);
  pop();

  push();
  noFill();
  stroke(185, 233, 252);
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
  cone.show();
  

  iceCreamStrawberry(450,60);
 
}

//instructions();

//Losing screen
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
  fill(202, 186, 219);
  stroke(255, 255, 255);
  rect(365, 185, 300, 60, 9);

  pop();

  push();
  fill(255, 255, 255);
  textSize(45);
  text("Try again 🥺", 400, 230);
  pop();

  chocolateBar(-520, 100);
  watermelon(1300, 200);
}

function gameActive (){
  scenery();
  //   //instructionsPanel();
  //   // screenNextLevel();
  //   // loseScreen();
  //   // startScreen();
  levelPanel();
  randomIcecreamPattern();
  cone.show();
  cone.moving();
  panel.draw();
  // https://www.youtube.com/watch?v=_H9JIwWP7HQ
  // we had help from karl during the labs to structure the array and loop

  //5% of the time the new ice cream will be added
  if (random(1) < 0.03) {
    iceCreams.push(new IceCream(random(width), random(-100, -20)));
  }

  for (let iceCream of iceCreams) {
    iceCream.show();
    iceCream.moving();
  }

  //loop to take things backwards from the array
  for (let i = iceCreams.length - 1; i >= 0; i--) {
    if (cone.catches(iceCreams[i])) {
      console.log(iceCreams[i].flavors);
      if (iceCreams[i].flavors === panel.flavors) {
        // screenNextLevel();
        // setTimeout(
        //   showNextLevelScreen = false, 5000);
        // panel.flavors();
        level = level + 1;
        iceCreams[i].velocity = iceCreams[i].velocity + 5;
        console.log(iceCreams[i].velocity);
      }
      else {
        screen = 3;
        level = 1;
      }
      iceCreams.splice(i, 1);
      console.log("hello");
    } else if (iceCreams[i].y > height + 10) {
      iceCreams.splice(i, 1);

    }
  }
}



function draw() { 

// same mechanism Evellin and Isabel did for the lunar lander
  if (screen === 0) {
    instructions();
  } else if (screen === 1) {
    startScreen();
  } 
  else if (screen === 2) {
    gameActive();
  }  else if (screen === 3) {
  loseScreen();
  }

  
}

function keyPressed() {
  if (screen === 0 && keyCode === 13) {
    screen = 1;
    
  } else if (screen === 1 && keyCode === 13) {
    screen = 2;
    // rocketSetup();
    // gameMode();
  } else if (screen === 3 && keyCode === 13) {
    screen = 0;
    // rocketSetup();
    // gameMode();
  }

}
