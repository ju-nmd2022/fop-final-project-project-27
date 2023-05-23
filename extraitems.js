export class ExtraItems {
  constructor(x, y, velocity) {
    this.x = x;
    this.y = y;
    this.items = random(["Watermelon", "Chocolate", "Pop corn", "Lollipop"]);
    this.velocity = 1 + level * 1.2;
    this.size = 80;
  }

  show() {
    if (this.items === "Watermelon") {
      push();
      translate(this.x, this.y);
      noStroke();
      fill(82, 183, 136);
      arc(0, 50, 100, 100, 0, PI, OPEN);
      fill(249, 65, 68);
      arc(0, 50, 85, 85, 0, PI, OPEN);
      fill(0, 0, 0);
      ellipse(-20, 60, 3, 5);
      ellipse(-5, 70, 3, 5);
      ellipse(10, 60, 3, 5);
      ellipse(25, 70, 3, 5);
      ellipse(10, 80, 3, 5);
      ellipse(-15, 80, 3, 5);
      ellipse(-27, 70, 3, 5);
      pop();
    } else if (this.items === "Chocolate") {
      push();
      translate(this.x, this.y);
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
    } else if (this.items === "Pop corn") {
      push();
      translate(this.x, this.y);
      noStroke();
      fill(255, 225, 145);
      ellipse(0, 0, 20);
      ellipse(15, -7, 20);
      ellipse(32, -5, 20);
      ellipse(49, -9, 25);
      ellipse(67, -6, 20);
      ellipse(30, -23, 25);
      ellipse(51, -24, 20);
      ellipse(8, -22, 23);
      noStroke();
      fill(255, 255, 255);
      rect(0, 0, 15, 80);
      rect(29, 0, 15, 80);
      rect(55, 0, 15, 80);
      fill(255, 0, 0);
      rect(14, 0, 15, 80);
      rect(44, 0, 15, 80);
      pop();
    } else if (this.items === "Lollipop") {
      push();
      translate(this.x, this.y);
      noStroke();
      fill(255, 255, 255);
      rect(-5, -5, 10, 53, 2);

      noStroke();
      fill(225, 18, 153);
      ellipse(0, 0, 40);

      noStroke();
      fill(255, 95, 158);
      rect(-22, -3, 44, 10, 5);
      pop();
    }
  }

  moving() {
    this.y = this.y + this.velocity;
    this.velocity = this.velocity + 0.03;
  }
}
