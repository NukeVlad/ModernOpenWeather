// @todo:
// Fill in forecast information maybe for the next 12 hours or something
var units = "imperial";
var city  = "Pittsburgh";
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
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + units +
    "&APPID=6038e3bba1a2677c56d94e2ee755c41b";

  $.getJSON(url, function(data){
    $("#weather-current").text("The weather in " + data.name + " is currently " + data.weather[0].description +
     " with a temperature of " + data.main.temp + "°. Wind speed is currently " + data.wind.speed + ".");

      weatherId = data.weather[0].id;
  })
}

function changeBackground(weatherId){
  // console.log(weatherId);

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
