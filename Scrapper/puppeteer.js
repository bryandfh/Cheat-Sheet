const axios = require('axios');
    const cheerio = require('cheerio');

    const url = 'https://www.collinsdictionary.com/dictionary/german-english/junge';

    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const statsTable = $('span');
        console.log(statsTable.length);
      })
      .catch(console.error);