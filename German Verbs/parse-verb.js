let {PythonShell} = require('python-shell')
let fs = require('fs');

const getData = (x) => fs.readFileSync(x).toString().split("\n");
let data = getData('list2.txt')

const parse = data.map(function(item) {
    //Remove breakline, remove the initial number, and separate string after first space. From Lana del rey => [Lana, del Rey] 
    return item.replace(/(\r\n|\n|\r)/gm, "").split('. ')[1].split(/(?<=^\S+)\s/)
});

//Get just verbs
const verbs = parse.map( item => item[0]);

function python(v){
    return new Promise(async function(resolve, reject){
        console.log('Verbo: ' + v)
          let options = {
          mode: 'text',
          pythonOptions: ['-u'],
          args: [v]
         };

          await PythonShell.run('scrape-verb.py', options, function (err, results) {
          //On 'results' we get list of strings of all print done in your py scripts sequentially. 
          if (err) throw err;
      resolve(results)
     });
   })
 } 

function conjugate(v){
    return new Promise(async function(resolve, reject){
        let r =  await python(v)
        r = r.toString().replace( /[\r\n]+/gm, "" );
        resolve( r)
    })
 }

const conjugateAllVerbs = async () => {
    return Promise.all(verbs.map(item => conjugate(item)))
}
  
conjugateAllVerbs().then(data => {
    let dataf = data;
    console.log(dataf)
})



