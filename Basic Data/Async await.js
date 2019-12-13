function someFunc() {
    console.log('Primera funcion')
    return 1
}

function someFunc2(num) {
    console.log('Segunda función obtiene el num '+ num )
    return -1 
}

async function wrapperFunc() {
    try {
        let r1 = await someFunc();
        let r2 = await someFunc2(r1);
        return r1+r2;
    } catch(e) {
        console.log(e);
        throw e;
    }
}

wrapperFunc().then(result => {
    console.log('Suma de funciones = ' + result)
}).catch(err => {
    console.log(err);
    throw err;
});