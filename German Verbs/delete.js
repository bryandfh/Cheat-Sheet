let a = JSON.parse('{"Ich": "wei\\u00df", "Du": "wei\\u00dft", "Er_Sie_Es": "wei\\u00df", "Wir": "wissen", "Ihr": "wisst", "Sie_sie": "wissen"}')

const print = x => console.log(x);

let b = [a,a,a,a,a,a]


const verifyUmlaut = x => {
    return x.replace('\\u00dc','Ü').replace('\\u00fc','ü').replace('\\u00c4','Ä').replace('\\u00e4','ä').replace('\\u00d6','Ö').replace('\\u00f6','ö').replace('\\u00df','ß')
} 

/*
for (const item of b)
    Object.keys(item).forEach( key => item[key] = verifyUmlaut(item[key]) );
*/

let c = b.map(item => Object.keys(item).forEach( key => item[key] = verifyUmlaut(item[key]) ))


console.log(b)



