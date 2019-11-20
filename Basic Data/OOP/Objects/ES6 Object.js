// Extract value from Object 
const singer = { name: 'Lana del Rey', genre: 'Pop' };
//From
const name = singer.name; //Lana del Rey
const genre = singer.genre; //Pop
//ES6 way
const { name, genre } = singer; 
//ES6 Way given assignment
const { name: singerName, genre: genreName } = singer; //Create const singerName = 'Lana del Rey' and const genreName = 'Pop'

//Extract value from Nested Object
const user = {
    bryanF: { 
      age: 23,
      email: 'bryan@gmail.com'
    }
};
//Assign to variable with the same name
const { bryanF: { age, email }} = user;
//Assign to variable with different names
const { bryanF: { age: userAge, email: userEmail }} = user;

