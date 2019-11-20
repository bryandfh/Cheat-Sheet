//Normal function
const myFunc = () => {
    const myVar = "Lana del Rey";
    return myVar;
}

//Syntactic sugar equivalente
const myFunc = () => "Lana del Rey";

// Add parameters to Arrow Function
const doubler = (item) => item * 2; 

//If it has one argument its equal to  
const doubler = item => item * 2;

//Two or more parameter
const multiplier = (item, multi) => item * multi;

//Default values
const increment = (number, value = 1) => number + value;
//console.log(increment(5, 2)); Return 7
//console.log(increment(5)); Return 6

//Rest parameter with Fuction parameter
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
//console.log(sum(1, 2, 3, 4)); Return 10