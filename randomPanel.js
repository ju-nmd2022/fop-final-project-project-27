export class Panel {
  constructor(x, y, flavors) {
    this.x = x;
    this.y = y;
    this.flavors = random([
      "Vanilla",
      "Grape",
      "Strawberry",
      "Mint Chocolate Chip",
      "Licorice",
    ]);
  }

  draw() {
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
}
