export class Cone {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = 0;
    this.w = this.x + 80;
  }
  show() {
    push();
    strokeWeight(2.5);
    stroke(248, 171, 93);
    fill(243, 201, 139);
    triangle(
      this.x + 20,
      this.y,
      this.x + 60,
      this.y + 80,
      this.x + 100,
      this.y
    );

    //lines of the cone
    line(this.x + 30, this.y, this.x + 65, this.y + 70);
    line(this.x + 40, this.y, this.x + 70, this.y + 57);
    line(this.x + 50, this.y, this.x + 75, this.y + 45);
    line(this.x + 60, this.y, this.x + 80, this.y + 36);
    line(this.x + 70, this.y, this.x + 85, this.y + 25);
    line(this.x + 80, this.y, this.x + 92, this.y + 17);

    line(this.x + 90, this.y, this.x + 55, this.y + 70);
    line(this.x + 80, this.y, this.x + 50, this.y + 60);
    line(this.x + 70, this.y, this.x + 45, this.y + 50);
    line(this.x + 60, this.y, this.x + 40, this.y + 40);
    line(this.x + 50, this.y, this.x + 35, this.y + 30);
    line(this.x + 40, this.y, this.x + 30, this.y + 20);
    pop();
  }
  moving() {
    this.x = this.x + this.s;
    if (keyIsDown(39)) {
      this.s = 15;
    } else if (keyIsDown(37)) {
      this.s = -15;
    } else {
      this.s = 0;
    }

    if (this.x > 850) {
      this.x = 850;
    } else if (this.x < -12) {
      this.x = -12;
    }
    // boundary on both sides of the screen
  }

  // Help from Eveline during the labs
  // debug with chatgpt with the cone position problem

  catches(iceCream) {
    const coneTopY = this.y + 30;
    const coneBottomY = this.y + 80;
    const coneLeftX = this.x + 50;
    const coneRightX = this.x + 60;

    const iceCreamTopY = iceCream.y;
    const iceCreamBottomY = iceCream.y + iceCream.size;
    const iceCreamLeftX = iceCream.x - iceCream.size / 2;
    const iceCreamRightX = iceCream.x + iceCream.size / 2;

    if (
      iceCreamBottomY >= coneTopY &&
      iceCreamTopY <= coneBottomY &&
      iceCreamRightX >= coneLeftX &&
      iceCreamLeftX <= coneRightX
    ) {
      return true;
    } else {
      return false;
    }
  }

  collide(item) {
    const coneTopY = this.y + 30;
    const coneLeftX = this.x + 50;
    const coneRightX = this.x + 60;

    const itemBottomY = item.y + item.size;
    const itemLeftX = item.x - item.size / 2.5;
    const itemRightX = item.x + item.size / 2.5;

    if (
      itemBottomY >= coneTopY &&
      itemRightX >= coneLeftX &&
      itemLeftX <= coneRightX
    ) {
      return true;
    } else {
      return false;
    }
  }
}
