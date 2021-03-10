
//api key for app to work
var api_key = "452c3222c520d5a1ef11ff57192c158b"; 
var btns = document.querySelector("#buttons");
var form = document.querySelector("#weather-form");
var cities= localStorage.getItem("cities")

if (cities){
    cities = JSON.parse(cities)
}else {
    cities = []; 
}

function renderCityBtns(){
    cities.forEach (function(city){
        //build a btn
        var btn= document.createElement("button");
        //set its text to be the city name
        var btn= document.createElement("button");
        //append the btn to the city-btn div
    })
}




// event Listener for our form submit

form.addEventListener("submit", function (e){
    e.preventDefault();
    var city = document.querySelector("#city-input").value; 
    
    getWeather(city);
}); 

//Listen to our users click on the button, call the function of the event
btns.addEventListener("click", function(e){
    //stopping the search if the button has already populated the city
    e.preventDefault();
    
    if(!e.target.matches("button")) return;
    
    var city= e.target.textContent;
    getWeather(city); 
});


//function takes city name and retrieves weather data for that city
function getWeather(city){
    
    var currentWeatherUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    var lat = weather.coord.lat;
    var lon= weather.coord.lon;
    
    //send fetch request to get latitude and longitude
    fetch(currentWeatherUrl)
    .then((data)=>data.json())
    .then(function (weather){
        if(weather.cod === "404") {
            alert("City not found");
            return;
        }
if (!cities.includes(weather.name)){
    cities.push(weather.name);
    localStorage.setItem("cities,", JSON.stringify(cities));
    renderCityBtns(); 
}

//api call for the latitude and longitude
var onecallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${api_key}`;
fetch(onecallURL)
.then((data) => data.json()
.then(function (onecallData){
    console.log(onecallData);
}));

});
}

getWeather("tucson");
