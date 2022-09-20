function showCurrentDate() {
    let currentTime = new Date();
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
  
    let currentYear = currentTime.getFullYear();
    let currentDay = days[currentTime.getDay()];
    let currentMonth = months[currentTime.getMonth()];
    let currentDate = currentTime.getDate();
    let currentHour = currentTime.getHours();
    if (currentHour < 10) {
      currentHour = `0${currentHour}`;
    }
    let currentMinutes = currentTime.getMinutes();
    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }
  
    let hourToday = `${currentHour}:${currentMinutes}`;
    let dateToday = `${currentDay} ${currentDate}/${currentMonth}/${currentYear}`;
  
    let appDate = document.querySelector("#today-date");
    appDate.innerHTML = `${dateToday}`;
  
    let appHour = document.querySelector("#today-hour");
    appHour.innerHTML = `${hourToday}`;
  }
  
  showCurrentDate();
  
  
  let chosenCity = document.querySelector("#city-name");
  
  function showCityWeather(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    chosenCity.innerHTML = `${cityInput.value}`;
  }
  
  let searchForm = document.querySelector("#search-city");
  searchForm.addEventListener("submit", showCityWeather);
  
  
  function showTemperature(response) {
    console.log(response.data);
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#today-temperature");
    let description = document.querySelector("#weather-description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let iconElement=document.querySelector("#icon");
    temperatureElement.innerHTML = `${temperature}`;
    description.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
    iconElement.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
      iconElement.setAttribute("alt", response.data.weather[0].description);
  }
  
  function searchEngine(event) {
    let city = document.querySelector("#city-input").value;
    let apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
  
  let searchFormEngine = document.querySelector("#search-city");
  searchFormEngine.addEventListener("submit", searchEngine);
  