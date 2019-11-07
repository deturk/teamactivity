// const data = fetch('data.json');
// data.then(Response => {
//     return Response.json();
//     console.log('response', Response);
// }).then(stuff => {
//     console.log(stuff);
// })
// console.log('before then', data);

// function longProcess(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve(42);
//         }, 200);
//     });
   
// }
// longProcess().then(result=>{
//     console.log('total', 10 + result);
// }).catch(err=>{
//     console.log(err);
// });

const baseUrl = 'https://pokeapi.co/api/v2/';

function getJson(url){
    if(!url){
        url = baseUrl + 'pokemon';
    }
    return fetch(url).then(res=>{
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

function getPokemonList(){
    const listElement = document.getElementById('list');
    getJson(baseUrl + 'type/3').then(data =>{
        //do stuff
        data.pokemon.forEach(element => {
            listElement.appendChild(renderPokemon(element));
        });
    });
}

function renderPokemon(pokemon){
    const item = document.createElement('li');
    item.innerHTML = pokemon.pokemon.name;
    return item;
};

getPokemonList();
// const myList = document.getElementById('list');



// function beforeNextBtn(page = null){

//     getJson(page).then(data =>{
//         console.log(data);
//         const myNewArray = data.results.map(item =>{
//             return `<li>${item.name}</li>`;
//         }).join('');
        
       
//         prvbtn.addEventListener('touchend', ()=>{
//             beforeNextBtn(data.previous);
//         });

        
//         nxtbtn.addEventListener('touchend', ()=>{
//             beforeNextBtn(data.next)
//         });
//         // console.log(myNewArray);
//         myList.innerHTML = myNewArray;

//     });
    
// }
// const prvbtn = document.createElement('button');
//       prvbtn.innerText = 'Previous';
//       document.body.appendChild(prvbtn);
// const nxtbtn = document.createElement('button');
//       nxtbtn.innerText = 'Next';
//       document.body.appendChild(nxtbtn);
// beforeNextBtn();