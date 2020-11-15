const api = {
    key: "d1434a71032e73b0b4cea9f9c93c88f4",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);
console.log("hi");

function setQuery(evt) {
    if (evt.keyCode == 13) { // 13 == ENTER key 
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let minmax = document.querySelector('.current .hi-low');
    minmax.innerHTML = `${Math.round(weather.main.temp_min)}<span>°C</span> / ${Math.round(weather.main.temp_max)}<span>°C</span>`

    let looks = document.querySelector('.current .weather');
    looks.innerHTML = `${weather.weather[0].main}`;
}

// makes and return whole date representation
function dateBuilder(d) {

    // uses months and days because getDay(), getMonth() returns integer 
    let months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    // return string of the date
    return `${day} ${date} ${month} ${year}`
}
