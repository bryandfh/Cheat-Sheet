//Use of Prototype Properties
function Person (name) {
    this.name = name;
}
let bryan = new Person('Bryan');
let daniel = new Person('Daniel');
bryan.isHuman = true;
daniel.isHuman = true;
///Can be simplified to
Person.prototype.isHuman = true; // All person would had isHuman set to true

//Change Prototpe to a new Object
function Person (name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person, // Its important to define the constructor property
    numLegs: 2,
    eat: function() {
        console.log("Eating nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name); 
    }
}
