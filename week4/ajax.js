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
}).catch(err=>{
    console.log(err);
});

const baseUrl = 'https://pokeapi.co/api/v2/';

function getJson(url){
    return fetch(baseUrl + url).then(res=>{
        if(res.ok){
            return res.json();
        }else{
            console.log('error!');
            throw new Error('bad response');
            
        }
    }).catch(err =>{
        console.log('getJson', err);
    });
}
const myList = document.getElementById('list');

getJson('type/3').then(data =>{
    console.log(data);
    const myNewArray = data.pokemon.map(item =>{
        return `<li>${item.pokemon.name}<li>`;
    }).join('');
    // console.log(myNewArray);
    myList.innerHTML = myNewArray;
});