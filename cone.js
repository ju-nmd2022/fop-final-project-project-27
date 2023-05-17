export class Cone {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = 0;
    this.w = this.x + 80;
    // this.w = w;
  }
  show() {
    push();
    translate(this.x, this.y);
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
      this.s = -10;
    } else {
      this.s = 0;
    }

    if (this.x > 430) {
      this.x = 430;
    } else if (this.x < -10) {
      this.x = -10;
    }
    // boundary on both sides of the screen
  }
  catches(iceCream) {
    if (
      iceCream.y >= this.y * 2 &&
      (iceCream.x + 100) / 2 > this.x &&
      (iceCream.x + 100) / 2 < this.w
    ) {
      return true;
    } else {
      return false;
    }
  }
}

// export class Cone {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.s = 0;
//     this.width = 80;
//     this.height = 80;
//   }

//   show() {
//     push();
//     translate(this.x, this.y);
//     strokeWeight(2.5);
//     stroke(248, 171, 93);
//     fill(243, 201, 139);
//     triangle(
//       this.x + 20,
//       this.y,
//       this.x + 60,
//       this.y + 80,
//       this.x + 100,
//       this.y
//     );

//     //lines of the cone
//     line(this.x + 30, this.y, this.x + 65, this.y + 70);
//     line(this.x + 40, this.y, this.x + 70, this.y + 57);
//     line(this.x + 50, this.y, this.x + 75, this.y + 45);
//     line(this.x + 60, this.y, this.x + 80, this.y + 36);
//     line(this.x + 70, this.y, this.x + 85, this.y + 25);
//     line(this.x + 80, this.y, this.x + 92, this.y + 17);

//     line(this.x + 90, this.y, this.x + 55, this.y + 70);
//     line(this.x + 80, this.y, this.x + 50, this.y + 60);
//     line(this.x + 70, this.y, this.x + 45, this.y + 50);
//     line(this.x + 60, this.y, this.x + 40, this.y + 40);
//     line(this.x + 50, this.y, this.x + 35, this.y + 30);
//     line(this.x + 40, this.y, this.x + 30, this.y + 20);
//     pop();
//   }

//   moving() {
//     this.x = this.x + this.s;
//     if (keyIsDown(39)) {
//       this.s = 15;
//     } else if (keyIsDown(37)) {
//       this.s = -10;
//     } else {
//       this.s = 0;
//     }

//     if (this.x > 430) {
//       this.x = 430;
//     } else if (this.x < -10) {
//       this.x = -10;
//     }
//     // boundary on both sides of the screen
//   }

//   catches(iceCream) {
//     const coneLeft = this.x - this.width / 2;
//     const coneRight = this.x + this.width / 2;
//     const coneTop = this.y;
//     const coneBottom = this.y + this.height;

//     const iceCreamLeft = iceCream.x - iceCream.size / 2;
//     const iceCreamRight = iceCream.x + iceCream.size / 2;
//     const iceCreamTop = iceCream.y - iceCream.size / 2;
//     const iceCreamBottom = iceCream.y + iceCream.size / 2;

//     if (
//       iceCreamBottom >= coneTop &&
//       iceCreamTop <= coneBottom &&
//       iceCreamRight >= coneLeft &&
//       iceCreamLeft <= coneRight
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
