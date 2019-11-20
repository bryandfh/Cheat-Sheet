// See Inheritance.js first
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat() {
    console.log("nom nom nom");
  }
};
let Bear = Object.create(Animal.prototype);
let Cat = Object.create(Animal.prototype);

Bear.eat(); // "nom nom nom"
Cat.eat();


//Set child propotype to an Instance of parent
function Dog(name){
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
let chihuahua = new Dog('Claps');
chihuahua.eat(); // nom nom nom
