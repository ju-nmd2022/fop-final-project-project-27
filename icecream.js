// export default class IceCream {
//   constructor(x, y, flavors) {
//     this.x = x;
//     this.y = y;
//   }

//   getRandomFlavor() {
//     const flavors = [
//       "Vanilla",
//       "Chocolate",
//       "Strawberry",
//       "Mint Chocolate Chip",
//       "Cookies and Cream",
//     ];

//     const randomIndex = Math.floor(Math.random() * flavors.length);
//     return flavors[randomIndex];
//   }
// }

export class IceCream {
  constructor(x, y, flavors) {
    this.x = x;
    this.y = y;
    this.flavors = [
      "Vanilla",
      "Grape",
      "Strawberry",
      "Mint Chocolate Chip",
      "Cookies and Cream",
    ];
    this.color = [0, 0, 0];
    this.size = 80;
  }

  // getRandomFlavor() {
  //   const randomIndex = Math.floor(Math.random() * this.flavors.length);
  //   return this.flavors[randomIndex];
  // }

  show() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.color);
    ellipse(0, 0, 78, 78);
    ellipse(-29, 35, 30, 30);
    ellipse(0, 35, 30, 30);
    ellipse(29, 35, 30, 30);
    pop();

    if (this.flavors === "Strawberry") {
      this.color([255, 0, 0]);
    } else if (this.flavors === "Vanilla") {
      this.color([240, 218, 157]);
    } else if (this.flavors === "Grape") {
      this.color([130, 46, 129]);
    } else if (this.flavors === "Mint Chocolate Chip") {
      this.color([187, 223, 140]);
    } else if (this.flavors === "Cookies and Cream") {
      this.color([0, 0, 0]);
    }
  }

  // color(color) {
  //   this.color = color;
  // }

  // setColorBasedOnFlavor() {
  //   if (this.flavors === "Strawberry") {
  //     this.color([255, 0, 0]);
  //   } else if (this.flavors === "Vanilla") {
  //     this.color([240, 218, 157]);
  //   } else if (this.flavors === "Grape") {
  //     this.color([130, 46, 129]);
  //   } else if (this.flavors === "Mint Chocolate Chip") {
  //     this.color([187, 223, 140]);
  //   } else if (this.flavors === "Cookies and Cream") {
  //     this.color([0, 0, 0]);
  //   }
  // }

  moving() {
    this.y = this.y + 3;
  }
}
