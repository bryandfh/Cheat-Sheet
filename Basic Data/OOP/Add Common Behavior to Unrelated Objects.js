//Inheritance does not work well for unrelated objects
let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
};

let bird = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengers: 524
};
  
flyMixin(bird); //Now both can print "Flying, wooosh!"
flyMixin(plane);