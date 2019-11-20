// create a quakes module
import {getJSON, getLocation} from './utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// getlocation and getJSON return promises so attach a then method
getLocation().then(result=>{
    getJSON(baseUrl).then(result =>{
        console.log(result);
    });
    
});

// getJSON(baseUrl).then(result =>{
//     console.log(result);
// });