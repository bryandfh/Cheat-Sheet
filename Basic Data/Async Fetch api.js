const fetch = require('node-fetch');
(async () => {
    const fetchResult = await fetch('https://sv443.net/jokeapi/category/programming')
    const data = await fetchResult.text();
    console.log(data);
})()