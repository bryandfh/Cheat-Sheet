//Create object
let person = {
    name: "Bryan",
    age: 23,
};

//Access object property
console.log(person.age);

//Create methon inside Object
let person = {
    name: "Bryan",
    age: 23,
    sayName() {
        return `Hello! My name is ${this.name}.`;
    }
};
person.sayName(); //Return Hello! My Name is Bryan

//Pass argument to an Object
function malePerson (name, age) {
    this.name = name;
    this.age = age;
    this.sex = 'Male';
}
let Bryan = new malePerson('Bryan', 23);