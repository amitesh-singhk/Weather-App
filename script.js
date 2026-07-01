const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

// Paste your API key here
const apiKey = "YOUR_API_KEY";

async function getWeather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {

    alert("City not found!");

    cityName.innerText = "City";
    temperature.innerText = "--°C";
    description.innerText = "Weather Description";
    humidity.innerText = "Humidity : --";
    wind.innerText = "Wind : --";
    weatherIcon.src = "";

    return;
}

        cityName.innerText = data.name;
        temperature.innerText = `${data.main.temp}°C`;
        description.innerText = data.weather[0].description;
        humidity.innerText = `Humidity : ${data.main.humidity}%`;
        wind.innerText = `Wind : ${data.wind.speed} km/h`;

        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;

    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
}

searchBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    getWeather(city);
});