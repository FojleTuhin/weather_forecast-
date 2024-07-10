
const apiKey = 'e97e308b129a44e48be182937240907'; 
const locations = ''; 




fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${'dhaka'}`)
.then(res=>res.json())
.then(data=>{
  
  displayWeather(data)
});


const displayWeather=(data)=>{
  console.log(data);
  const weatherDataContainer= document.getElementById('weatherDataContainer');
  const location= document.getElementById('location');

  // location get
  const weatherLocation = `${data.location.name}, ${data.location.country}`
 location.innerHTML= weatherLocation;



//  get all data 

const allData= `

      <div>
        <div class="content-center">
          <div class="main">
            <p class="text">Current Weather</p>
            <p class="text">Last Update</p>

            <p class="time">${data.current.last_updated            }</p>

            <div class="currentWeather">
              <img src=${data.current.condition.icon}>
              <p class="temp">${data.current.temp_c} <sup>o</sup>C</p>
            </div>

            <div class="weather-section">
              <div class="weather">
                <p>Cloud</p>
                <p>${data.current.cloud                }</p>
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
                <p>${data.current.feelslike_c}</p>
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
                <p>Due Point</p>
                <p>${data.current.dewpoint_c}<sup>o</sup></p>
              </div>
            </div>
          </div>


          <div class="sun-moon">
            <p>Sun/Moon (7/10/2022)</p>
            <div class="inside-sunMoon">
              <div>
                <img class="img" src="photos/sunrise.png" alt="">
                <p>Sunrise</p>
                <p>6: 30 AM</p>
              </div>

              <div>
                <img class="img" src="photos/sunrise.png" alt="">
                <p>Sunset</p>
                <p>6: 30 AM</p>
              </div>
            </div>
            <div class="inside-sunMoon">
              <div>
                <img class="img" src="photos/moon.png" alt="">
                <p>Moonrise</p>
                <p>6: 30 AM</p>
              </div>

              <div>
                <img class="img" src="photos/moon.png" alt="">
                <p>Moonset</p>
                <p>6: 30 AM</p>
              </div>
            </div>
          </div>
        </div>
        <div class="forecast-section">
          <p class="text ">14 days forecast</p>
          <div class="all-forecast">
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>
            <div class="forecast">
              <p>07/10/2024</p>
              <div class="inside-forecast">
                <img class="sun" src="photos/sun.png" alt="">
                <div>
                  <p>33 <sup>o</sup></p>
                  <p>33 <sup>o</sup></p>

                </div>
              </div>
            </div>


          </div>

        </div>
      </div>



`

weatherDataContainer.innerHTML= allData;

}


// let weatherData = [
//     { location: 'New York', temperature: 25, condition: 'Sunny' },
//     { location: 'Los Angeles', temperature: 30, condition: 'Cloudy' },
//     { location: 'Chicago', temperature: 20, condition: 'Rainy' },
//     // Add more data as needed
//   ];

//     // Initial display of all weather data
//   displayWeather(weatherData);
  
//   // Function to display weather data
//   function displayWeather(data) {
//     const weatherDataContainer = document.getElementById('weatherData');
//     weatherDataContainer.innerHTML = ''; // Clear previous data
  
//     data.forEach(item => {
//       const weatherHTML = `
//         <div class="weather-item">
//           <h2>${item.location}</h2>
//           <div><strong>Temperature:</strong> ${item.temperature}°C</div>
//           <div><strong>Condition:</strong> ${item.condition}</div>
//         </div>
//       `;
//       weatherDataContainer.innerHTML += weatherHTML;
//     });
//   }
  

  
  // Function to filter weather data based on search input
  function searchWeather() {
    const searchInput = document.getElementById('input-text').value;
    console.log(searchInput);
  
    // // Filter data based on search input
    // const filteredData = weatherData.filter(item => item.location.toLowerCase().includes(searchInput));
  
    // // Display filtered data
    // displayWeather(filteredData);
  }



  // function getWeatherIcon(condition) {
  //   switch(condition.toLowerCase()) {
  //     case 'sunny':
  //       return 'wi-day-sunny';
  //     case 'cloudy':
  //       return 'wi-cloudy';
  //     case 'rainy':
  //       return 'wi-rain';
  //     default:
  //       return 'wi-day-sunny';
  //   }
  // }
  
  // function displayWeather(data) {
  //   const weatherDataContainer = document.getElementById('weatherData');
  //   weatherDataContainer.innerHTML = ''; // Clear previous data
  
  //   data.forEach(item => {
  //     const iconClass = getWeatherIcon(item.condition);
  //     const weatherHTML = `
  //       <div class="weather-item">
  //         <h2>${item.location}</h2>
  //         <i class="wi ${iconClass}"></i>
  //         <div><strong>Temperature:</strong> ${item.temperature}°C</div>
  //         <div><strong>Condition:</strong> ${item.condition}</div>
  //       </div>
  //     `;
  //     weatherDataContainer.innerHTML += weatherHTML;
  //   });
  // }
  // function searchWeather() {
  //   const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  //   if (!searchInput) {
  //     alert('Please enter a location to search.');
  //     return;
  //   }
  
  //   const filteredData = weatherData.filter(item => item.location.toLowerCase().includes(searchInput));
  //   if (filteredData.length === 0) {
  //     alert('No results found. Please try a different location.');
  //   }
  
  //   displayWeather(filteredData);
  // }
      