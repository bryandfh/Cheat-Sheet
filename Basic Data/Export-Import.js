//How to export
export const suma = (x, y) => {
    return x + y;
}

export const resta = (x, y) => {
    return x - y;
}

//Example of export with short arrow function. It doesn't have to be short arrow to work...
const resta = (x, y) => x - y;
const suma = (x, y) => x + y;

export { resta, suma };

//How to import
import { resta, suma } from './name_of_js_file.js';

//How to import all function from JS file
import * as NombreModulo from './name_of_js_file.js';
