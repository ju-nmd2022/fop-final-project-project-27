// export default class IceCream {
//   constructor(x, y, flavor) {
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
  constructor(x, y, flavor) {
    this.x = x;
    this.y = y;
    this.flavor = flavor;
    this.flavors = [
      "Vanilla",
      "Grape",
      "Strawberry",
      "Mint Chocolate Chip",
      "Cookies and Cream",
    ];
    this.color = [0, 0, 0];
  }

  getRandomFlavor() {
    const randomIndex = Math.floor(Math.random() * this.flavors.length);
    return this.flavors[randomIndex];
  }

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
  }

  setColor(color) {
    this.color = color;
  }

  setColorBasedOnFlavor() {
    if (this.flavor === "Strawberry") {
      this.setColor([255, 0, 0]);
    } else if (this.flavor === "Vanilla") {
      this.setColor([240, 218, 157]);
    } else if (this.flavor === "Grape") {
      this.setColor([130, 46, 129]);
    } else if (this.flavor === "Mint Chocolate Chip") {
      this.setColor([187, 223, 140]);
    } else if (this.flavor === "Cookies and Cream") {
      this.setColor([0, 0, 0]);
    }
  }

  moving() {
    this.y = this.y + 2;
  }
}
