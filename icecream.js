export class IceCream {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.flavors = random([
      "Vanilla",
      "Grape",
      "Strawberry",
      "Mint Chocolate Chip",
      "Licorice",
    ]);
    this.velocity = 1 + level * 1.2;
    this.size = 80;
  }

  show() {
    if (this.flavors === "Strawberry") {
      fill(255, 0, 110);
    } else if (this.flavors === "Vanilla") {
      fill(240, 218, 157);
    } else if (this.flavors === "Grape") {
      fill(130, 46, 129);
    } else if (this.flavors === "Mint Chocolate Chip") {
      fill(187, 223, 140);
    } else if (this.flavors === "Licorice") {
      fill(0, 0, 0);
    }
    push();
    translate(this.x, this.y);
    noStroke();
    ellipse(0, 0, 78, 78);
    ellipse(-29, 35, 30, 30);
    ellipse(0, 35, 30, 30);
    ellipse(29, 35, 30, 30);
    pop();
  }

  moving() {
    this.y = this.y + this.velocity;
    this.velocity = this.velocity + 0.03;
  }
}
