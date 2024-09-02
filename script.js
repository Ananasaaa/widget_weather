const apiKey = '1f86e32dac06497108b4ca2738a8cd23'; 
const city = 'Odessa'; 

async function fetchWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`);
        const data = await response.json();

        const date = new Date(); 
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const formattedDate = date.toLocaleDateString('en-US', options);
        const formattedTime = date.toLocaleTimeString('en-US'); 

const locationEl = document.querySelector('.location');
const dateTimeEl = document.querySelector('.date-time');
const tempEl = document.querySelector('.temp');
const descriptionEl = document.querySelector('.description');
const humidityEl = document.querySelector('.humidity');
const pressureEl = document.querySelector('.pressure');
const windEl = document.querySelector('.wind');


locationEl.textContent = data.name;
dateTimeEl.textContent = `${formattedDate}, ${formattedTime}`;
tempEl.textContent = `${Math.round(data.main.temp)}°C`;
descriptionEl.textContent = data.weather[0].description;
humidityEl.textContent = `Humidity: ${data.main.humidity}%`;
pressureEl.textContent = `Pressure: ${data.main.pressure} hPa`;
windEl.textContent = `Wind: ${data.wind.speed} km/h`;

document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`;

    } catch (error) {
        console.error('Error receiving data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchWeatherData);

document.querySelector('.btn').addEventListener('click', fetchWeatherData);


