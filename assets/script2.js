//api key for app to work//
const api_key = "8c13e3d659618767f6b81c58577f6e75";
let cityBtn = document.getElementById("citySearchbtn");
// current weather variables
let city = "";
let searchCity = document.getElementById("searchHistory");
let cityArray = [];
let temp = document.querySelector("#temperature");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#windSpeed");
let uvIndex = document.getElementById("uvIndex");
let icon = document.querySelector("#icon");
let forecastIcon = document.getElementById("forecastIcon");
let currentCity = document.getElementById("currentCity");
let forecastContainer= document.getElementById("forecastContainer");
let forecastRow = document.getElementById("forecastRow");
//FIVE DAY


// JSON storage
let recentLocations = JSON.parse(localStorage.getItem("recentLocations")) || [];
console.log(recentLocations)


//search for a city to see if it exists
function findCity(c) {
  for (let i = 0; i < cityArray.length; i++) {
    if ((c.toUpperCase() = cityArray[i])) {
      console.log(city);
      return -1;
    }
    return 1;
  }
  console.log(c);
}
// to get the specific city weather 
function getWeather(city) {
  const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${api_key}`;
  fetch(currentWeatherURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      currentCity.innerHTML = data.name;
      temp.innerHTML =
        "Temperature: " + (data["main"]["temp"].toFixed(1) + "℉");
      humidity.innerHTML =
        "Humidity: " + (data["main"]["humidity"] + "%");
      windSpeed.innerHTML =
        "Windspeed: " + (data["wind"]["speed"].toFixed(1) +"MPH");
      icon.setAttribute (
        "src",
        `http://openweathermap.org/img/w/` + data.weather[0].icon + ".png"
      );
      const lat = data["coord"]["lat"];
      const lon = data["coord"]["lon"];

      uvIndexValue(lat, lon);
      fiveDay(city);
    });
};


// UV call 
function uvIndexValue(lat, lon) {
  const oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${api_key}`;
  fetch(oneCallURL)
    .then((response) => response.json())
    .then((data) => {
      const uvI = data.current.uvi
      uvIndex.innerHTML = "UV Index: " + uvI
      if (uvI < 2 ) {
        uvIndex.classList.add("lowUv")
      } else if (uvI > 5) {
        uvIndex.classList.add("highUv")
      } else {
        uvIndex.classList.add("mediumUv")
      }
      console.log(data);
     
      }
     
    )};





let id = 1;
function fiveDay(city){
  const getFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=imperial`;
  fetch(getFiveDay)
    .then((data) => data.json())
    .then(function (data) {
      console.log("5 day data" , data);
      let currentDay = data.list;
      for (let index = 0; index < currentDay.length; index++) {
        let today = currentDay[index];
        console.log("currentDayIndex: ", currentDay[index]);
        let newDate = new Date(today.dt * 1000);
        if (today.dt_txt.indexOf("09:00:00") !== -1) {
          let date = document.getElementById(`date${id}`);
          date.textContent = newDate.toLocaleString(
            "en-US", 
            {year: "numeric", month: "long", day: "numeric" }
          ); 

          // date.textContent = today.dt_txt.slice(0, 10);
          let img = document.getElementById(`forecastIcon${id}`);
          img.setAttribute ( "src",
            `https://openweathermap.org/img/w/` + today.weather[0].icon + ".png"
          );
          let temperature = document.getElementById(`temperature${id}`);
            temperature.textContent = "Temperature:  " + today.main.temp +  " ℉";
      
          let humidity = document.getElementById(`humidity${id}`)
          humidity.textContent = "Humidity: " + today.main.humidity;

         let windSpeed = document.getElementById(`windspeed${id}`)
          windSpeed.textContent = "Windspeed: " + today.wind.speed.toFixed() + " MPH"
          id++;
        }
      
      }
    }
    )}



// event listener for the city button
cityBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (searchCity.value.trim !== "" || searchCity.value > 0) {
    let city = searchCity.value; //.trim removes white spaces beginning and end of a string
    const updatedCities = [...recentLocations, city];
    localStorage.setItem("recentLocations", JSON.stringify(updatedCities));
    getWeather(city);
    console.log(city);
  }
});
