//api key for app to work
const api_key = "34cf1d928154aa6755ddab973ba1a01c"; 
//activating HTML in 
var forecastContainer = document.querySelector("#forecast-container"); 
var inputCity = JSON.parse(localStorage.getItem("inputCity"))|| [] 
var searchHistory= document.getElementById ("searchHistory") 
var todaysWeather= document.getElementById("currentCity")
var search= document.getElementById("citySearchBtn")


// function searchCity()
// search.on("click")
  

//Function for Current Day
function getWeather(city){
    //getting the api key in a varible
    var currentWeatherUrl= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;      
    //making the call to the api
    fetch.length(currentWeatherUrl)
    //asking for the data that returns to be translated into JSON
    .then ((data)=> data.json())
    //specifically looking at the weather return
    .then (function(weather) {
        //if the city entered in is not vali, alerting the user
        if(weather.cod==="404"){
         //display message to user
         alert("City not found");
         return;
        };

        var lat = weather.coord.lat;
        var lon= weather.coord.lon;
//setting up the second api call variable
    var oneCallUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${api_key}`;
    });
    // calling api 
      fetch(oneCallUrl)
      //again getting the data and translating into JSON
      .then((data) => data.json())
      .then (function (oneCallData){

        // creating a varible to display the date from html element
        var citySeachForm = document.getElementbyId("citySearchForm");
        //sticking the data on the sidebar
        citySearchForm.append("sidebar")
       
        // City name 
        //creating a variable to display the city name from the html element
        var cityEl= document.getElementById("inputCityLabel");
        //adding it to document, adding a date as well.
        cityEl.textContent = city+ "-" +new Date().toDateString();
        citySearchForm.append(cityEl); 

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
        citySearchForm.append(uvEL); 
        currentContainer.innerHTML= ""; 
        currentContainer.append(citySearchForm);
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

// ("citySearchbtn").on("click", function (event){
//     event.preventDefault();
//     var city = $("#city-input").val();
// history.push(city);



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
// do not understand this....
    // renderPast()
    // function renderPast(){
    //   historyContainer.innerHTML= "";
    //   for(const city of past){
    //       var previousCity = document.createElement("li");
    //       previousCity.textContent=city
    //       historyContainer.append(previousCity); 

      }

    }};