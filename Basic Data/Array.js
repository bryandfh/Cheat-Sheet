// Array unshift
let cadena = [5,6,7];
cadena.unshift(1,2,3,4) // = [1,2,3,4,5,6,7]

// Array push
let cadena = [5,6,7];
cadena.push(1,2) // = [5,6,7,1,2]

// Array pop
let lana = ['Lana', 'del', 'rey'];
lana.pop(); // = ['Lana', 'del']

// Array shift
let lana = ['Lana', 'del', 'rey'];
lana.shift(); // = ['del', 'rey']

// Array splice
let array = ['I', 'like', 'Lana', 'del', 'Rey'];
array.splice(2, 3);// == [ 'Lana', 'del', 'Rey' ] En la posicion dos toma tres

//Array splice(inserting in the middle)
let lana = [10, 11, 12, 12, 15];
let indice = 3;
let posicionQueBorraremos = 1;

lana.splice(indice, posicionQueBorraremos, 13, 14); // = [ 10, 11, 12, 13, 14, 15 ]

// Spread operator
let array = ['I', 'like', 'Lana', 'del', 'Rey'];
let thatArray = [...array]; // = ['I', 'like', 'Lana', 'del', 'Rey']

// Index 
let array = ['I', 'like', 'Lana', 'del', 'Rey'];
array.indexOf('Lana'); // returns 2
fruits.indexOf('Billie'); // returns -1.

//Reverse
let a = 'Rosalia', b = 'Lana';
[a, b] = [b, a];