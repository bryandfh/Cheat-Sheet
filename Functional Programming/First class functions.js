//FCF All JS Function

//Can be assign to variable
const f = (printMe) => console.log(printMe)
f('Test')

//Enforce immutability
const redObj = { color: 'red' }

//Create object rom inmutable object
const redObj = { color: 'red' }
const yellowObj = Object.assign({}, redObj, {color: 'yellow'})