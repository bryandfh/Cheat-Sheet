//Example of a method repeated two times(describe)
function Cat(name) {
    this.name = name;
}

function Cat(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Cat,
    eat: function() {
        console.log("nom nom nom");
    }
};
  
Bear.prototype = {
    constructor: Bear,
    eat: function() {
        console.log("nom nom nom");
    }
};

//Can be simplified by

function Cat(name) {
    this.name = name;
}
  
Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

//Animal would be a super type and have the eat function. Because that we can remove eat from bear and cat