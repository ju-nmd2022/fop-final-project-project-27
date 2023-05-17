export default class IceCream {
    constructor(x, y, flavor) {
      this.x = x;
      this.y = y;
    }
  
    getRandomFlavor() {
      const flavors = [
        "Vanilla",
        "Chocolate",
        "Strawberry",
        "Mint Chocolate Chip",
        "Cookies and Cream",
      ];
  
      const randomIndex = Math.floor(Math.random() * flavors.length);
      return flavors[randomIndex];
    }
  }
  