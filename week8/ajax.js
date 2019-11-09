

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
