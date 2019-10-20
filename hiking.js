function displayHikeList() {
    const hikeListElement = document.getElementById('hikes');
    hikeListElement.innerHTMLj = '';
    hikeList.forEach(hike => {
        hikeListElement.appendChild(buildHikehtml(hike));
    })
}

function buildHikeHtml(hike) {
    const item = document.createElement('li');
    item.innerHTML = `
    <h2>B${hike.name}</h2>
    <div class = "image"><img src = "https://byui-cit.github.io/cit261/examples/${hike.imgSrc}" 
        alt= "${hike.imgAlt}"></div>
        <h3>Distance</h3>
        <p>3 miles</p>
    </div>
    <div>
        <h3>Difficulty</h3>
        <p>Easy${hike.difficulty}</p>
    </div>`;
    return item
    
}

function buildHikeDetailed(hike = null)
const item = document.createElement('li');
item.innerHTML = `<img src="https://byui-cit.github.io/cit261/examples/${hike.imgSrc}" alt="Image of Bechler Falls" />
    <h2>Bechler Falls</h2>
    <div>
        <h3>Distance</h3>
        <p>3 miles</p>
    </div>
    <div>
        <h3>Difficulty</h3>
        <p>Easy</p>
    </div>
    <div>
        <h3>Description</h3>
        <p>Beautiful short hike along the Bechler river to Bechler Falls</p>
    </div>
    <div>
        <h3>How to get there</h3>
        <p>
            Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.
        </p>`
window.onload = displayHikeList;