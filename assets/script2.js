//api key for app to work//
const api_key = "8c13e3d659618767f6b81c58577f6e75"; 
// var inputCity = JSON.parse(localStorage.getItem("inputCity"))|| []
var cityBtn = document.getElementById("citySearchbtn"); 
var city = ""
var searchCity = document.getElementById("searchHistory"); 
var cityArray = []; 
var temp = document.querySelector("#temperature"); 
var humidity= document.querySelector("#humidity"); 
var windSpeed = document.querySelector("#windSpeed");
var uvIndex = document.getElementById("uvIndex");

//search for a city to see if it exists
function findCity(c) {
    for (let i = 0; i < cityArray.length; i++) {
        if (c.toUpperCase() = cityArray[i]) {
            console.log(city);
            return -1;
        }
        return 1;
    }
    console.log(c)
}
//Display current weather
function showWeather(event) {
    event.preventDefault();
    if (searchCity.value.trim !== "" || searchCity.value > 0) {
        var city = searchCity.value//.trim removes white spaces beginning and end of a string
        getWeather(city);
        console.log(city);
    }
}


function getWeather(city) {
    var currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    fetch(currentWeatherURL)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            temp = temp.innerHTML = "Temperature: "+ Math.floor(((data['main']['temp']- 273.15) * 1.80 + 32))+" ℉";
            humidity = humidity.innerHTML = "Humidity: "+ (data['main']['humidity']+"%");
            windSpeed = windSpeed.innerHTML = "Windspeed: "+ (data['wind']['speed'] *2.237 + "MPH");

            //uvIndex = uvIndex.innerHTML = "UV Index: "+ (data['main']['temp'] - 273.15)
            // //if error code is 404 display "City Not Found"
            // if (data[cod] == "404") {
            //     alert("City not found!");
            //     return; //exits the function & returns the value of the error
            // }
            // if (data[cod]== "400") {
            //     alert("Please put the name of a city to search first!");
            //     return; //exits the function & returns the value of the error
            // }
            var latitude = data['coord']['lat'];
            console.log(latitude)
            var longitude = data['coord']['lon'];
            console.log(longitude)
            var oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${api_key}`
            console.log(oneCallURL);
            console.log(latitude);
            console.log(longitude);
        });
    }

 cityBtn. addEventListener("click", showWeather);
