// In JavaScript, a function always has access to the context in which it was created
function Bird() {
    let hatchedEgg = 10; // Private.. not available to everyone

    //Avaible to everyone 
    this.getHatchedEggCount = () => hatchedEgg;
    /*
    Example without arrow function
    this.getHatchedEggCount = function() { 
        return hatchedEgg;
    };*/
    
}
let ducky = new Bird();
console.log(ducky.hatchedEgg) //Doesnt work
console.log(ducky.getHatchedEggCount()); //10

