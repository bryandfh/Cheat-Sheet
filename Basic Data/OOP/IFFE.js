// IIFE = Immediately Invoked Function Expression 

(function () {
    console.log("Hello");
})();

/* The function has no name and is not stored in a variable.
The two parentheses () at the end of the function expression cause it to be immediately executed or invoked.*/

//Use IIFE to create a Module
function glideMixin(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
}

function flyMixin(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
}

//Can be groups as
let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
})(); // The two parentheses cause the function to be immediately invoked