//Example of promise
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    
    if(responseFromServer) { //Everything went right
      resolve("We got the data");
    } else {	//It was bad
      reject("Data not received");
    }
});

//Use of .then
myPromise.then(result => {
    console.log(result);// do something with the result.
});

//Handle reject promise
makeServerRequest.catch(error => {
    console.log(error);
});