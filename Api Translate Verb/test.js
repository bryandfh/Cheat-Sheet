const conjugate = require("./translate.js");

verb = ["Essen","Lesen","Trinken","sein","haben","werden","können","müssen","sagen","machen","geben","kommen","sollen","wollen"]

conjugate(verb).then(data => console.log(data))