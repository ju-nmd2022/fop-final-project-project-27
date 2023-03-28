function scenery() {
createCanvas(960, 540);
background(185, 233, 252);
}

//Ice cream cone drawing
function iceCreamCone (x, y){
    push();
    strokeWeight(2.5);
    stroke(248, 171, 93);
    fill(243, 201, 139);
triangle(420, 400, 460, 480, 500, 400);

//lines of the cone

line(430,400, 465, 470);
line(440,400, 470, 457);
line(450,400, 475, 445);    
line(460, 400,480, 436);
line(470, 400, 485, 425);
line(480, 400, 492, 417);

line(490,400, 455, 470);
    line(480,400, 450, 460);
    line(470,400, 445, 450); 
    line(460, 400,440, 440);
    line(450, 400, 435, 430);
    line(440, 400, 430, 420);

    pop();
}

//ice cream flavors
function iceCreamStrawberry(x, y) {
    push();
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
    noStroke();
    fill(187, 223, 140);
    ellipse(458, 362, 78, 78);
    ellipse(429, 397, 30, 30);
    ellipse(459, 397, 30, 30);
    ellipse(487, 397, 30, 30);
 pop();
}

function iceCreamVanilla() {
    push();
    noStroke();
    fill(240, 218, 157);
    ellipse(458, 362, 78, 78);
    ellipse(429, 397, 30, 30);
    ellipse(459, 397, 30, 30);
    ellipse(487, 397, 30, 30);
 pop(); 
}

function iceCreamGrape (){
    push();
    noStroke();
    fill(130, 46, 129);
    ellipse(458, 362, 78, 78);
    ellipse(429, 397, 30, 30);
    ellipse(459, 397, 30, 30);
    ellipse(487, 397, 30, 30);
 pop();
}

function draw() {
    
}

