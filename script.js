// Select DOM elements
const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

// OpenWeatherMap API Key and URL
const apiKey = 'ec97878a258263581da1f0dc2b9a3a57'; // Replace with your OpenWeatherMap API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Fetch Weather Data
const getWeather = async (city) => {
  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();

    // Update UI
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Weather: ${data.weather[0].description}`;
    weatherResult.classList.remove('hidden');
  } catch (error) {
    alert(error.message);
  }
};

// Form Submit Event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
    cityInput.value = '';
  }
});
