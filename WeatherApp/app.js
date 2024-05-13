const key = "e18e96ad12393df6319f832e0ccfc510";
let cityName = document.querySelector('.city-name').innerHTML;
let temperature = document.querySelector('.temperature').innerHTML;
let weatherDescription = document.querySelector('.weather-description').innerHTML;
let additionalInfo = document.querySelector('.additional-info').innerHTML;
let humidity = document.querySelector('.humidity').innerHTML;
let windSpeed = document.querySelector('.wind-speed').innerHTML;

let searchInput = document.querySelector('.search-input');
let searchBtn = document.querySelector('.search-button');

searchBtn.addEventListener("click", (e) => {
    console.log('1. enter search input event lister')
    const req = searchInput.value;
    getWeather(req);
    console.log('5. getWeather called', req)
})

async function getWeather(req) {
    console.log('2. enter into getWeather')
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req}&appid=${key}&units=metric`)
    console.log('3. fetch response', response)
    const data = response;
    console.log('4. fetch data', data);
    return data;
}