const fetch = require('node-fetch');

fetch('https://sv443.net/jokeapi/category/dark')
    .then(res => res.json())
    .then(json => console.log(json));