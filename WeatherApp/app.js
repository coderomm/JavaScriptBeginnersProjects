const API_KEY = "e18e96ad12393df6319f832e0ccfc510";
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-button');
const weatherIcon = document.querySelector('.weather-icon');

let timer;

const setUpTimer = () => {
    timer = setInterval(() => {
        const randomCity = getRandomCity();
        getWeather(randomCity);
    }, 2000);
}

const getRandomCity = () => {
    const cities = [
        "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad",
        "Chennai", "Kolkata", "Surat", "Pune", "Jaipur",
        "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
        "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara",
        "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
        "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi",
        "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai",
        "Allahabad", "Howrah", "Ranchi", "Gwalior", "Jabalpur",
        "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur",
        "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubli-Dharwad"
    ];

    const index = Math.floor(Math.random() * cities.length);
    return cities[index];
}

searchInput.addEventListener('input', () => {
    clearInterval(timer);
    if (!searchInput.value.trim()) {
        setUpTimer();
    }
});

searchBtn.addEventListener("click", (e) => {
    const req = searchInput.value.trim();
    if (req) {
        clearInterval(timer);
        getWeather(req);
        setUpTimer();
    }
    else {
        alert('Please enter a city name.');
    }
})

async function getWeather(req) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${req}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        updateWeatherDisplay(data);
    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
}

const updateWeatherDisplay = (data) => {
    if (!data || !data.weather || !data.weather.length) {
        alert('No weather data available.');
        return;
    }

    const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.weather-text').textContent = `${data.weather[0].description}`;
    console.log(document.querySelector('.weather-description').innerHTML)
    document.querySelector('.temperature').innerHTML = `<i class="fas fa-thermometer-half"></i> ${data.main.temp}°C`;
    document.querySelector('.min-temp').textContent = `${data.main.temp_min}°C`;
    document.querySelector('.max-temp').textContent = `${data.main.temp_max}°C`;
    document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
    document.querySelector('.pressure').textContent = `${data.main.pressure} hPa`;
    document.querySelector('.visibility').textContent = `${data.visibility} meters`;
    document.querySelector('.wind-speed').textContent = `${data.wind.speed} km/h`;
    document.querySelector('.wind-direction').textContent = `${data.wind.deg}°`;
    document.querySelector('.cloudiness').textContent = `${data.clouds.all}%`;
    document.querySelector('.sunrise').textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    document.querySelector('.sunset').textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    document.querySelector('.timezone').textContent = `UTC${data.timezone / 3600 > 0 ? "+" : ""}${data.timezone / 3600}`;
    document.querySelector('.weather-icon').src = weatherIconUrl;
}

setUpTimer();