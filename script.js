
const apiKey = 'e97e308b129a44e48be182937240907'; 
const locations = ''; 




fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${'dhaka'}`)
.then(res=>res.json())
.then(data1=>{
  console.log(data1);
});


let weatherData = [
    { location: 'New York', temperature: 25, condition: 'Sunny' },
    { location: 'Los Angeles', temperature: 30, condition: 'Cloudy' },
    { location: 'Chicago', temperature: 20, condition: 'Rainy' },
    // Add more data as needed
  ];

    // Initial display of all weather data
  displayWeather(weatherData);
  
  // Function to display weather data
  function displayWeather(data) {
    const weatherDataContainer = document.getElementById('weatherData');
    weatherDataContainer.innerHTML = ''; // Clear previous data
  
    data.forEach(item => {
      const weatherHTML = `
        <div class="weather-item">
          <h2>${item.location}</h2>
          <div><strong>Temperature:</strong> ${item.temperature}°C</div>
          <div><strong>Condition:</strong> ${item.condition}</div>
        </div>
      `;
      weatherDataContainer.innerHTML += weatherHTML;
    });
  }
  

  
  // Function to filter weather data based on search input
  function searchWeather() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  
    // Filter data based on search input
    const filteredData = weatherData.filter(item => item.location.toLowerCase().includes(searchInput));
  
    // Display filtered data
    displayWeather(filteredData);
  }
  function getWeatherIcon(condition) {
    switch(condition.toLowerCase()) {
      case 'sunny':
        return 'wi-day-sunny';
      case 'cloudy':
        return 'wi-cloudy';
      case 'rainy':
        return 'wi-rain';
      default:
        return 'wi-day-sunny';
    }
  }
  
  function displayWeather(data) {
    const weatherDataContainer = document.getElementById('weatherData');
    weatherDataContainer.innerHTML = ''; // Clear previous data
  
    data.forEach(item => {
      const iconClass = getWeatherIcon(item.condition);
      const weatherHTML = `
        <div class="weather-item">
          <h2>${item.location}</h2>
          <i class="wi ${iconClass}"></i>
          <div><strong>Temperature:</strong> ${item.temperature}°C</div>
          <div><strong>Condition:</strong> ${item.condition}</div>
        </div>
      `;
      weatherDataContainer.innerHTML += weatherHTML;
    });
  }
  function searchWeather() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    if (!searchInput) {
      alert('Please enter a location to search.');
      return;
    }
  
    const filteredData = weatherData.filter(item => item.location.toLowerCase().includes(searchInput));
    if (filteredData.length === 0) {
      alert('No results found. Please try a different location.');
    }
  
    displayWeather(filteredData);
  }
      