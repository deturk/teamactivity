const data = fetch('data.json');
data.then(Response => {
    return Response.json();
    console.log('response', Response);
}).then(stuff => {
    console.log(stuff);
})
console.log('before then', data);

function longProcess(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(42);
        }, 200);
    });
   
}
longProcess().then(result=>{
    console.log('total', 10 + result);
}).catch;
