//ES5
const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
};

//ES6
const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };

  //Other ES5 Example
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
};

  //ES6 way to do it
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);