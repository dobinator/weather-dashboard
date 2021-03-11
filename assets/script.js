//api key for app to work
const api_key = "452c3222c520d5a1ef11ff57192c158b"; 
//activating HTML in JS
const form = document.querySelector("#weather-form");
//var inputCity= localStorage.getItem("currentCity");
// var searchBtns = document.getElementById("searchBtn");
var inputCity = JSON.parse(localStorage.getItem("cities"))|| [] 
var searchHistory= document.getElementById ("searchHistory") 
var todaysWeather= document.getElementById("currentCity")
var windSpeed = document.getElementById("windSpeed")



//calling the function to render the city buttons
function renderCityBtns(){
    // searchBtns.innerHTML = " ";
    console.log(inputCity)
    
    for( i= 0; i <inputCity.length; i++){
        var btn = document.createElement("button");
        //set its text to be the city name
        btn.textContent = inputCity[i]; 
        //append the btn to the city-btn div
        searchHistory.append(btn); 
    }   
}
renderCityBtns();


var search= document.getElementById("searchBtn")
// event Listener for our form submit

search.addEventListener("click", function (e){
    
    e.preventDefault();
    var city = document.querySelector("#inputCity").value; 
    console.log(city)
    getWeather(city);
}); 

//Listen to our users click on the button, call the function of the event
//  searchBtns.addEventListener("click", function(e){
    //     //stopping the search if the button has already populated the city
    //     e.preventDefault();
    
    //     if(!e.target.matches("searchBtn")) return;
    
    //     var city= e.target.textContent;
    //     getWeather(city); 
    // });
    
    //function takes city name and retrieves weather data for that city
    function getWeather(city){
        
        var currentWeatherUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;
        
        //send fetch request to get latitude and longitude
        fetch(currentWeatherUrl)
        .then((data)=>data.json())
        .then(function (weather){
            console.log(weather)
            //alert created if the user enters a city not found
            if(weather.cod === "404") {
                alert("City not found");
                return;
            }// save the user input for name of city 
            if (!inputCity.includes(weather.name)){
                inputCity.push(weather.name);
                //checking for the array and pushing to local storage
                localStorage.setItem("cities", JSON.stringify(inputCity));
                renderCityBtns(); 
            }
            var lat = weather.coord.lat;
            var lon= weather.coord.lon;
            
            //temp for the api call
        var temp = document.createElement("p").textContent= weather.main.temp
        todaysWeather.append(temp)
        //wind speed for the api call
        var wind = document.createElement("p").textContent= weather.wind_speed
        windSpeed.append(wind)
        // 

        //moment for date and time

//api call for the latitude and longitude
var onecallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${api_key}`;
fetch(onecallURL)
.then((data) => data.json()
.then(function (oneCallData){
  
    console.log(oneCallData);

  
}));

});
}

//getWeather();
