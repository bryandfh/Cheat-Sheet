//How to reset inherited
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat() {
    console.log("nom nom nom");
  }
};

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}

//Returning with
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
