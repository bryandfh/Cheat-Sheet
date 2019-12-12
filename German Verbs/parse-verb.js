let fs = require('fs');
const {PythonShell} = require('python-shell')
let options = { //Python shell config
    mode: 'text',
    pythonOptions: ['-u'],
    args: ['sehen']
};

const getData = (x) => fs.readFileSync(x).toString().split("\n");

let data = getData('list.txt')

const parse = data.map(function(item) {
    //Remove breakline, remove the initial number, and separate string after first space. From Lana del rey => [Lana, del Rey] 
    return item.replace(/(\r\n|\n|\r)/gm, "").split('. ')[1].split(/(?<=^\S+)\s/)
});

//Get just verbs
const verbs = parse.map( item => item[0]);

/*
const query = verbs.map(function(item) {

    return 
});*/

const print = (x) => console.log(x)

const conjugate = function (verb, opt){
    opt.args = [verb];
    PythonShell.run('scrape-verb.py', options, function (err, results) {
        if (err) throw err;
        return results; 
        //console.log('results: %j', results[0].split(","));
    });
}

const test = async function(verb, opt) {
    opt.args = [verb];
    const result = await new Promise((resolve, reject) => {
        PythonShell.run('scrape-verb.py', opt, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
        });
    });
    return result
}

print(test('essen',options));

/*
PythonShell.run('scrape-verb.py', options, function (err, results) {
  if (err) 
    throw err;
  // Results is an array consisting of messages collected during execution
  //let result = results[0].replace("[","").replace("]","").split(",");
  console.log('results: %j', results[0].split(","));
});
*/
