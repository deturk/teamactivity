const hikeStyles = document.querySelector(".hikeStyles");

let imagePath = '//byui-cit.github.io/cit261/examples/';


const hikeList = [{
    name: 'Bechler Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description: 'Beautiful short hike along the Bechler river to Bechler Falls',
    directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
}, {
    name: 'Teton Canyon',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Teton Canyon',
    distance: '5 miles',
    difficulty: 'Moderate',
    description: 'Beautiful short hike up Teton Canyon',
    directions: 'Take Highway 33 to Driggs. Turn right into the town and continue through. Follow that road for a few miles then turn right up Teton Canyon. Drive to the end of the road. There is a parking area at the trailhead.'
}, {
    name: 'Denanda Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Denanda Falls',
    distance: '12 miles',
    difficulty: 'Moderate',
    description: 'Beautiful hike through Bechler Meadows to Denanda Falls',
    directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for several miles then turn left again at the sign for the Bechler Meadows ranger station. There is a parking area at the trailhead.'
}];
//build only hike names
function buildHikesNames (hike){
        const item = document.createElement('li');
        item.innerHTML = `
        <h2>${hike.name}</h2>
        ` ;
        return item;
   
}
// //function to listen to events
// function display(){
//     event.target.innerHTML = buildHikeDetailed();
// }


//call only hike names
function displayNames(){
    const hikeListElement = document.getElementById('hikes');
    hikeList.forEach(hike => {
        hikeListElement.appendChild(buildHikesNames(hike));
    })
}


//get the array of hikes
function displayHikeList() {
    const hikeListElement = document.getElementById('hikes');
    hikeListElement.innerHTML = '';
    hikeList.forEach(hike => {
        hikeListElement.appendChild(buildHikeHtml(hike));
    })
}

//build the html to show hikes
function buildHikeHtml(hike) {
    const item = document.createElement('li');
    item.innerHTML = `
    <h2>${hike.name}</h2>
    <div>
    <img src="${imagePath}${hike.imgSrc}" alt= "${hike.imgAlt}">
        <h3>Distance</h3>
        <p>${hike.distance}</p>
    </div>
    <div>
        <h3>Difficulty</h3>
        <p>Easy${hike.difficulty}</p>
    </div>`;
    return item
    
}

//build hike details
function buildHikeDetailed(hike){
 const item = document.createElement('li');
    item.innerHTML = `<img src="${imagePath}${hike.imgSrc}" 
    alt= "${hike.imgAlt}">
    <h2>${hike.name}</h2>
    <div>
        <h3>Distance</h3>
        <p>${hike.distance}</p>
    </div>
    <div>
        <h3>Difficulty</h3>
        <p>${hike.difficulty}</p>
    </div>
    <div>
        <h3>Description</h3>
        <p>${hike.description}</p>
    </div>
    <div>
        <h3>How to get there</h3>
        <p>${hike.directions}</p>`;
    }

    function getHikeByName(hikeName) {
        return this.displayNames().find(hike => hike.name === hikeName);
      }
    //   //show a list of hikes in the parentElement
    //   function showHikeList() {
    //     this.parentElement.innerHTML = '';
    //     // notice that we use our getter above to grab the list instead of getting it directly...this makes it easier on us if our data source changes...
    //     renderHikeList(this.parentElement, this.getAllHikes());
    //     this.addHikeListener();
    //     // make sure the back button is hidden
    //     this.backButton.classList.add('hidden');
    //   }

function  showOneHike(hikeName) {
    const hike = this.getHikeByName(hikeName);
    this.parentElement.innerHTML = '';
    this.parentElement.appendChild(renderOneHikeFull(hike));
    // show the back button
    this.backButton.classList.remove('hidden');
  }

function addHikeListener() {
        // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
          child.addEventListener('touchend', e => {
            // why currentTarget instead of target?
            this.showOneHike(e.currentTarget.dataset.name);
          });
        });
      }
 



window.addEventListener('load', getHikeByName);
// hikeStyles.addEventListener('touchend', buildHikeHtml); 
