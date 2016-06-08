// @todo:
// Function for changing background color
// Fill in forecast information maybe for the next 12 hours or something
// ! Check to make sure #city has a value in it before making an API call
var units = "imperial";
var city  = "Pittsburgh";

$(document).ready(function(){
  // Clear city and set a default so the user can see an example
  $("#city").val("");
  getWeather("Pittsburgh");

  $("#search-btn").click(function(){
    getWeather($("#city").val());
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
    alert("not long enough");
    return;
  }
  // current day  - .../data/2.5/weather?id=123456 + &APPID...
  // forecast     - .../data/2.5/forecast?q=London...
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + units +
    "&APPID=6038e3bba1a2677c56d94e2ee755c41b";
  $.getJSON(url, function(data){
    $("#weather-current").text("The weather in " + data.name + " is currently " +
      data.weather[0].description + data.weather[0].icon + " and the temperature is " + data.main.temp + "°");
  });
}
