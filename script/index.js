// @todo:
// Condense API calls so only one is made instead of two
// Remove search-btn unless on mobile
var apiKey  = "";
var units   = "imperial";
var city    = "Pittsburgh";
var weatherId;

$(document).ready(function(){
  // Clear city and set a default so the user can see an example
  $("#city").val("");
  getWeather("Pittsburgh");

  $("#search-btn").click(function(){
    getWeather($("#city").val());
    changeBackground(weatherId);
    $("#city").val("");
  });

  // Change units based on which radio button is selected and get new API response
  $('input:radio').click(function(){
    if($('input:radio:checked')){
      units = $(this).val();
      getWeather(city);
    }
  });
});

function getWeather(cityName){
  city = cityName;

  if(cityName.length < 3){
    alert("The name of your city is not long enough. Please try again.");
    return;
  }
  // current day  - .../data/2.5/weather?id=123456 + &APPID...
  // forecast     - .../data/2.5/forecast?q=London...
  var currUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + units +
    "&APPID=" + apiKey;

  var foreUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=" + units +
    "&APPID=" + apiKey;

  $.getJSON(currUrl, function(data){
    $("#weather-current").text("The weather in " + data.name + " is currently " + data.weather[0].description +
     " with a temperature of " + data.main.temp + "° (" + data.main.temp_max + "°/ " + data.main.temp_min + "°).");

      weatherId = data.weather[0].id;
  })

  $.getJSON(foreUrl, function(data){
    // API JSON response comes with an array called list. Each item it list is a three hour block of time:
    // list[0] - three hours from API call, list[1] - six hours from API call. The whole array will give the next
    // five days.
    $("#weather-forecast").text("In three hours, you can expect to see " + data.list[0].weather[0].description +
    " with a temperature near " + data.list[0].main.temp + "°");
  })
}

function changeBackground(weatherId){
  if(weatherId >= 200 && weatherId <= 232){
    $("body").attr("class", "weatherTstorm");
  } else if(weatherId >= 300 && weatherId <= 321){
    $("body").attr("class", "weatherDrizzle");
  } else if(weatherId >= 500 && weatherId <= 531){
    $("body").attr("class", "weatherRain");
  } else if(weatherId >= 600 && weatherId <= 622){
    $("body").attr("class", "weatherSnow");
  } else if(weatherId > 801 && weatherId < 803){
    $("body").attr("class", "weatherClouds");
  } else if(weatherId == 900 || weatherId == 901 || weatherId == 902){
    $("body").attr("class", "weatherSevere");
  } else{
    $("body").attr("class", "weatherClear");
  }
}
