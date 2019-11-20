//How to check if an object has a property
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};
  
function isEveryoneHere(obj) {
    return [
        'Alan',
        'Sarah',
        'Ryan'
    ].every(i => obj.hasOwnProperty(i));
}