// create a function to fetch and return the url in the form of json
export function getJSON(url){
    return fetch(url)
        .then(function(response){
            if(!response.ok){
                throw Error(response.statusText);
            }else{
                return response.json();
            }
        })
        .catch(function(error){
            console.log(error);
            
        });
}

// get the location from the html5 api
export const getLocation = function(options){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}