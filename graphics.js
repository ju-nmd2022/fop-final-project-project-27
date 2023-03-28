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
line(430,400, 465, 470);
line(440,400, 470, 457);
line(450,400, 475, 445);    
line(460, 400,480, 436);
line(470, 400, 485, 425);
line(480, 400, 492, 417);
    pop();
}

function draw() {
    scenery();
    iceCreamCone();
}