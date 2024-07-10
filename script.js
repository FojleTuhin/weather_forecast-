

const apiKey = 'e97e308b129a44e48be182937240907'; 

const fetchWeather = (locations) => {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locations}`)
  // https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locations}
    .then(res => res.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
};

const searchWeather = () => {
  const inputText = document.getElementById('inputText').value;
  if (inputText.trim() !== "") {
    fetchWeather(inputText);
  }
};

// Add an event listener to the search button
document.getElementById('search').addEventListener('click', searchWeather);

// Fetch initial weather data for the default location
fetchWeather('dhaka');

const displayWeather = (data) => {
  const weatherDataContainer = document.getElementById('weatherDataContainer');
  const location = document.getElementById('location');
  const allForecast = document.getElementById('allForecast');

  // Clear previous forecast data
  allForecast.innerHTML = '';

  // Location data
  const weatherLocation = `${data.location.name}, ${data.location.country}`;
  location.innerHTML = weatherLocation;

  // Current weather data
  const allData = `
    <div>
      <div class="content-center">
        <div class="main">
          <p class="text">Current Weather</p>
          <p class="text">Last Update</p>
          <p class="time">${data.current.last_updated}</p>
          <div class="currentWeather">
            <img src=${data.current.condition.icon}>
            <p class="temp">${data.current.temp_c} <sup>o</sup>C</p>
          </div>
          <div class="weather-section">
            <div class="weather">
              <p>Cloud</p>
              <p>${data.current.cloud}</p>
            </div>
            <div class="weather">
              <p>Wind</p>
              <p>${data.current.wind_kph} km/h</p>
            </div>
            <div class="weather">
              <p>Humidity</p>
              <p>${data.current.humidity} %</p>
            </div>
            <div class="weather">
              <p>Feels like</p>
              <p>${data.current.feelslike_c}<sup>o</sup>C</p>
            </div>
          </div>
          <div class="weather-section">
            <div class="weather">
              <p>Visibility</p>
              <p>${data.current.vis_km}</p>
            </div>
            <div class="weather">
              <p>UV index</p>
              <p>${data.current.uv}</p>
            </div>
            <div class="weather">
              <p>Pressure</p>
              <p>${data.current.pressure_in}</p>
            </div>
            <div class="weather">
              <p>Dew Point</p>
              <p>${data.current.dewpoint_c}<sup>o</sup></p>
            </div>
          </div>
        </div>
        <div class="sun-moon">
          <p>Sun/Moon</p>
          <div class="inside-sunMoon">
            <div>
              <img class="img" src="photos/sunrise.png" alt="">
              <p>Sunrise</p>
              <p>${data.forecast.forecastday[0].astro.sunrise}</p>
            </div>
            <div>
              <img class="img" src="photos/sunrise.png" alt="">
              <p>Sunset</p>
              <p>${data.forecast.forecastday[0].astro.sunset}</p>
            </div>
          </div>
          <div class="inside-sunMoon">
            <div>
              <img class="img" src="photos/moon.png" alt="">
              <p>Moonrise</p>
              <p>${data.forecast.forecastday[0].astro.moonrise}</p>
            </div>
            <div>
              <img class="img" src="photos/moon.png" alt="">
              <p>Moonset</p>
              <p>${data.forecast.forecastday[0].astro.moonset}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  weatherDataContainer.innerHTML = allData;

  // Forecast data
  data.forecast.forecastday[0].hour.forEach(element => {
    const forecastData = `
      <div class="forecast">
        <p>${element.time}</p>
        <div class="inside-forecast">
          <img class="sun" src=${element.condition.icon} alt="">
          <div>
            <p>${element.temp_c} <sup>o</sup></p>
            <p>${element.feelslike_c} <sup>o</sup></p>
          </div>
        </div>
      </div>
    `;
    allForecast.innerHTML += forecastData;
  });
};
