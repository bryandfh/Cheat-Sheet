//Define a Constructor Function
class Vegetable {
    constructor(objtName) {
      this.name = objtName;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); //Return carrot

//Define getter and setter
class Thermostat {
    constructor(fahrenheit) {
        this._tempInCelsius = 5/9 * (fahrenheit - 32);
    }
    get temperature(){
        return this._tempInCelsius;
    }
    set temperature(newTemp){
        this._tempInCelsius = newTemp;
    }
}

//Es practica utilizar ._
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

//Prevent object mutation
let obj = {
    fname:"Bryan",
    lname:"Ferreira"
};
Object.freeze(obj);
obj.fname = "Daneil"; 
obj.lname = "Hernandez";
console.log(obj); 
// { fname: "Bryan", lname:"Hernandez"}