//api key for app to work
const api_key = "452c3222c520d5a1ef11ff57192c158b"; 
//activating HTML in 
var forecastContainer = document.querySelector("#forecast-container"); 
var inputCity = JSON.parse(localStorage.getItem("cities"))|| [] 
var searchHistory= document.getElementById ("searchHistory") 
var todaysWeather= document.getElementById("currentCity")
var search= document.getElementById("citySearchBtn")


// function searchCity()
// search.on("click")
  






//Function for Current Day
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

    console.log(hello)

    
        var lat = weather.coord.lat;
        var lon= weather.coord.lon;

    var oneCallUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${api_key}`;
    });
      fetch(oneCallUrl)
      .then((data) => data.json())
      .then (function (oneCallData){

        var mainCard= document.createElement("div");
        mainCard.classList.add("mainCard");
       
        // City name 
        var cityEl= document.createElement("h2");
        cityEl.textContent = city+ "-" +new Date().toDateString();
        mainCard.append(cityEl); 

        //UV 
        var uvEL= document.getElementById("uvIndex");
        var uvIndex= oneCallData.current.uvi;
        uvEL.textContent= oneCallData.current.uvi;

        if(uvIndex <= 2){
            uvEl.classList.add("favorable");
        }else if(unIndex >=5){
            uvEl.classList.add("severe");
        }else{
            uvEl.ClassList.add("moderate"); 
        }
        mainCard.append(uvEL); 
        currentContainer.innerHTML= ""; 
        currentContainer.append(mainCard);
    });
    


  //Function for Five Day () 
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
        dateEl.textContent= currentDay.dy_txt.slice(0,10) + "3:00"; 
        forecastCard.append(dateEl);

        //Image
        var imageEl = document.getElementById("icon");
        imageEl.setAttribute( "src" `http://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png`);
        imageEl.setAttribute("width", "50%");
        forecastCard.append(imageEl);

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

});
}

historyContainer.addEventListener("click", function(e){
   e.preventDefault()
   if(!e.target.matches("li"))return;
   getWeather(e.target.textContent)
   getFiveDay(e.target.textContent)



})

$("citySearchbtn").on("click", function (event){
    event.preventDefault();
    var city = $("#city-input").val();
    history.push(city);
    handleCity(city); 
    getWeather(city); 
    getFiveDay(city); 


});



function handleCity(cityName){
    // treat as a catch all for each item in history array
    if(!past.includes(cityName)){
        past.push(cityName)
    }

    }

    renderPast()
    function renderPast(){
      historyContainer.innerHTML= "";
      for(const city of past){
          var previousCity = document.createElement("li");
          previousCity.textContent=city
          historyContainer.append(previousCity); 

      }

    }};