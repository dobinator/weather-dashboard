//api key for app to work//
const api_key = "8c13e3d659618767f6b81c58577f6e75";
var cityBtn = document.getElementById("citySearchbtn");
var city = "";
var searchCity = document.getElementById("searchHistory");
var cityArray = [];
var temp = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windSpeed = document.querySelector("#windSpeed");
var uvIndex = document.getElementById("uvIndex");
var icon = document.querySelector("#icon");
var forecastIcon = document.getElementById("forecastIcon");

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

function getWeather(city) {
  var currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  fetch(currentWeatherURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      temp = temp.innerHTML =
        "Temperature: " +
        Math.floor((data["main"]["temp"] - 273.15) * 1.8 + 32) +
        " ℉";
      humidity = humidity.innerHTML =
        "Humidity: " + (data["main"]["humidity"] + "%");
      windSpeed = windSpeed.innerHTML =
        "Windspeed: " + (data["wind"]["speed"].toFixed(1) + "MPH");
      icon.setAttribute (
        "src",
        `http://openweathermap.org/img/w/` + data.weather[0].icon + ".png"
      );
      var lat = data["coord"]["lat"];
      var lon = data["coord"]["lon"];

      uvIndexValue(lat, lon);
      fiveDay(city);
    });
};

function uvIndexValue(lat, lon) {
  var oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${api_key}`;
  fetch(oneCallURL)
    .then((response) => response.json())
    .then((data) => {
      uvIndex = uvIndex.innerHTML = "UV Index: " + data.current.uvi;
      console.log(data);
     
      }
    )};

var id = 1;
function fiveDay(city) {
  var getFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=imperial`;
  fetch(getFiveDay)
    .then((data) => data.json())
    .then(function (data) {
      console.log("data;  ", data);
      var currentDay = data.list;
      for (let index = 0; index < currentDay.length; index++) {
        var today = currentDay[index];
        console.log("currentDayIndex: ", currentDay[index]);
        if (today.dt_txt.indexOf("09:00:00") !== -1) {
          var date = document.getElementById(`date${id}`);
          date.textContent = today.dt_txt.slice(0, 10);
          var img = document.getElementById(`forecastIcon${id}`);
          img.setAttribute ( "src",
            `https://openweathermap.org/img/w/` + today.weather[0].icon + ".png"
          );
          id++;
          var temperature = document.getElementById (`temperature${id} `);
          temperature.textContent = today.dt.main[temp] + " ℉";
          id++;
        //  var humidity = document.getElementById (`humidity${id}`)
        //  humidity.textContent = today.dt.main.humidity
          // id++;
         

          // var windSpeed = document.getElementById (`windSpeed${id}`)
          // windSpeed.textContent = today.wind.speed
        }
      }
    });
}


cityBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (searchCity.value.trim !== "" || searchCity.value > 0) {
    var city = searchCity.value; //.trim removes white spaces beginning and end of a string
    getWeather(city);
    console.log(city);
  }
});
