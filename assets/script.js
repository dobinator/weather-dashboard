var api_key = "452c3222c520d5a1ef11ff57192c158b"; 


function getWeather(city) {
var currentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
fetch(currentWeatherUrl)
.then((data)=> data.json())
.then( function (weather)  {
   // console.log (weather); 
    var lat = weather.coord.lat;
    var lon = weather.coord.lon;
    var oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${api_key}`; 

    fetch(oneCallURL)
    .then((data) => data.json())
    .then(function (oneCallData) {
        // oneCalldata has all the information that we need
    }):

  });
}

getWeather(); 