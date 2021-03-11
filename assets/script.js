//api key for app to work
var api_key = "452c3222c520d5a1ef11ff57192c158b"; 
//activating HTML in JS
var form = document.querySelector("#weather-form");
var inputCity= localStorage.getItem("#inputCity");
var searchBtns = document.getElementById("searchBtn");
//var cities = localStorage.getItem("cities"); 


if (inputCity){
    inputCity = JSON.parse(inputCity)
}else {
    inputCity = []; 
}
//changing the kelvin to Fahrenheit for the weather load the api . 

function kelvinToFahrenheit(temp){
 return (temp - 273.15) * 1.8 +32;

}

//calling the function to render the city buttons
function renderCityBtns(){
    searchBtns.innerHTML = " ";
    inputCity.forEach(function(city){
        //build a btn
        var btn= document.createElement("searchBtn");
        //set its text to be the city name
        newBtn= inputCity.value  
        //append the btn to the city-btn div
        searchBtns.append(newBtn); 
    });
}
renderCityBtns();


// event Listener for our form submit
 form.addEventListener("submit", function (e){

    e.preventDefault();
    var city = document.querySelector("inputCity").value; 
    
    getWeather(city);
}); 

//Listen to our users click on the button, call the function of the event
 searchBtns.addEventListener("click", function(e){
    //stopping the search if the button has already populated the city
    e.preventDefault();
    
    if(!e.target.matches("searchBtn")) return;
    
    var city= e.target.textContent;
    getWeather(city); 
});


//function takes city name and retrieves weather data for that city
function getWeather(city){
    
    var currentWeatherUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    //send fetch request to get latitude and longitude
    fetch(currentWeatherUrl)
    .then((data)=>data.json())
    .then(function (weather){
        //alert created if the user enters a city not found
        if(weather.cod === "404") {
            alert("City not found");
            return;
        }// save the user input for name of city 
        if (!inputCity.includes(weather.name)){
            inputCity.push(weather.name);
            localStorage.setItem("currentCity,", JSON.stringify(city));
            renderCityBtns(); 
        }
        //lat and long for the api call
        var lat = weather.coord.lat;
        var lon= weather.coord.lon;
        

//api call for the latitude and longitude
var onecallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${api_key}`;
fetch(onecallURL)
.then((data) => data.json()
.then(function (oneCallData){
  
    console.log(oneCallData);

  
}));

});
}

getWeather("tucson");
