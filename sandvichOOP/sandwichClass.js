
export class Sandwich {
    constructor(options) {
      this.options = options;
    }
  
    printRecipe() {
      if (!this.options.isGrilled) {
        return `${this.options.name.toUpperCase()}
        Ingredients: ${this.options.bread}
                     ${this.options.cheese}
                     ${this.options.filling}`;
      } else {
        return `${this.options.name.toUpperCase()} 
        Ingredients: ${this.options.bread} grilled bred
                     ${this.options.cheese}
                     ${this.options.filling}
                     Don't forget to grill the bread!`;
      }
    }
  
    printCheck() {
      return `This ${this.options.name.toUpperCase()} sandwich made from ${
        this.options.bread
      }${this.options.isGrilled ? " grilled" : ""} bread, ${
        this.options.cheese
      }, ${this.options.filling}.`;
    }
  
    getPrice() {
      return this.options.price;
    }
  
    printPrice() {
      return `The price is ${this.getPrice().toFixed(2)}`;
    }
  }
  
export  class ExtraSandwich extends Sandwich {
    _cheesePrice = 1;
    _fillingPrice = 2;
  
    constructor(options, cheeseAmount = 1, fillingAmount = 1) {
      super({
        ...options,
        cheese: `${options.cheese} x${cheeseAmount}`,
        filling: `${options.filling} x${fillingAmount}`,
      });
  
      this.price = options.price - this._cheesePrice - this._fillingPrice;
      this.cheeseAmount = cheeseAmount;
      this.fillingAmount = fillingAmount;
    }
  
    getPrice() {
      return this.price + (this.cheeseAmount * this._cheesePrice) + (this.fillingAmount * this._fillingPrice);
    }
  }
