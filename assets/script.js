//api key for app to work
const api_key = "452c3222c520d5a1ef11ff57192c158b"; 
//activating HTML in 
var forecastContainer = document.querySelector("#forecast-container"); 
var inputCity = JSON.parse(localStorage.getItem("cities"))|| [] 
var searchHistory= document.getElementById ("searchHistory") 
var todaysWeather= document.getElementById("currentCity")
var search= document.getElementById("searchBtn")

function getWeather(city){
    var currentWeatherUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;      
    fetch.length(currentWeatherUrl)
    .then ((data)=> data.json())
    .then (function(weather) {
        if(weather.cod==="404"){
         //display message to user
         alert("City not found");
         return;
        };
    var oneCallUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${api_key}`;
    });
    var lat = weather.coord.lat;
    var lon= weather.coord.lon;
      fetch(oneCallUrl)
      .then((data) => data.json())
      .then (function (oneCallData){
        var mainCard= document.createElement("div");
        mainCard.classList.add("mainCard");
       // Header
        var cityEl= document.createElement("h2");
        cityEl.textContent = city + " - " +new Date().toDateString();
        mainCard.append(cityEl); 

        //UV 
        var uvEL= document.createElement("p");
        uvEL.textContent= city+ " - " +new Date().toDateString();
        mainCard.append(uvEL); 

        currentContainer.append(mainCard);
    }

//calling the function to render the city buttons
function renderCityBtns(){
     for( i= 0; i <inputCity.length; i++){
        var btn = document.createElement("button");
        //set its text to be the city name
        btn.textContent = inputCity[i]; 
        //append the btn to the city-btn div
        searchHistory.append(btn); 
    }   
}
renderCityBtns();

// event Listener for our form submit
search.addEventListener("click", function (e){
    e.preventDefault();
    var city = document.querySelector("#inputCity").value; 
    console.log(city)
    getWeather(city);
});

    //function takes city name and retrieves weather data for that city
 function getFiveDay(city){
 var getFiveDay= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;      
 //send fetch request to get latitude and longitude
    fetch(getFiveDay)
     .then((data)=>data.json())
     .then(function (oneCallData) {
    var currentDay= fiveDayArray.list
    for(let index= 4; index < fiveDayArray.length; index= index+ 8){

        var currentDay = fiveDayArray[index]
        var forecastCard = document.getElementById("forecast-container")
    
        //date
        var dateEl= document.createElement("h2")
        dateEl.textContent= currentDay.dy_txt.slice(0,10) + "3:00"
        forecastCard.append(dateEl)

        //temperature
        var tempEl= document.getElementById("temperature");
        tempEl.textContent= `Temp: ${currentDay.main.temp} °F`;
        forecastCard.append(tempEl);

        //humidity
        var humidityEl = document.getElementById("humidity");
        humidityEl.textContent= `Humidity: ${currentDay.main.humidity} %`;
        forecardCard.append(humidityEl)

        forecastContainer.append(forecastCard)
    }    

}};
}

//  //temp for the api call
//  var temp = document.createElement("p").textContent= weather.main.temp
//  todaysWeather.append(temp)
// }}};
$(".sbmtbutton").on("click", function (event){
    event.preventDefault();
    var city = $("#city-input").val();
    history.push(city);
    handleCity(city); 
    getWeather(city); 
    getFiveDay(city); 
});



function handleCity(cityName){
    // treat as a catch all for each item in history array
    if(!history. includes(cityName)){
        history.push(cityName)
    }
    for(const city of history){

    }
    // Each item gets a p tag 
    // add an event listener
    // call getWeather and buildDashboard using the value of whatever 
    // Push into history array the most recent search
    // After the array has been updated, we store it under the key of history so that when the page reloads you get the most recent search.


}