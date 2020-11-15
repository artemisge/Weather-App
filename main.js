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
}
