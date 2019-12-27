let {PythonShell} = require('python-shell')

const verifyUmlaut = x => {
    return x.replace('\\u00dc','Ü').replace('\\u00fc','ü').replace('\\u00c4','Ä').replace('\\u00e4','ä').replace('\\u00d6','Ö').replace('\\u00f6','ö').replace('\\u00df','ß').replace('\\u00b7','·')
}

function python(v){
    return new Promise(async function(resolve, reject){
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
        r = r.toString().replace( /[\r\n]+/gm, "" ).replace("b'{","{").replace("}'","}")
        res = JSON.parse(r);
        resolve(res)
    })
 }

 /*
let verbs = ['sehen','essen']
*/

const conjugateAllVerbs = async (v) => {
    return Promise.all(v.map(item => conjugate(item)))
}
 
/*
conjugateAllVerbs().then(data => {
    let dataf = data;
    console.log(dataf.map( item => Object.keys(item).map( key => item[key] = verifyUmlaut(item[key]))))
})
*/

async function conj (verbs){
    const verb = await conjugateAllVerbs(verbs)
    return verb.map( item => Object.keys(item).map( key => item[key] = verifyUmlaut(item[key])));
}
/*
module.exports (async function(verbs) {
    const verb = await conjugateAllVerbs([verbs])
    console.log(verb)
    return verb.map( item => Object.keys(item).map( key => item[key] = verifyUmlaut(item[key])));
})();
*/

module.exports = conj;
 
