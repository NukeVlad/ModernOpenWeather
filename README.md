# ModernOpenWeather
A stylish front end build around the OpenWeather API that I built for a FreeCodeCamp Challenge.
It was uploaded mid-build because I decided it was something I wanted to show off.

An example of the UI for this can be found on my [CodePen](http://codepen.io/source-decay/full/YWwZBQ/).
However, since passing around API keys in no-beuno, __you'll need to sign up for your own OpenWeatherMap API Key
to see what all ModernOpenWeather can do.__

I built ModernOpenWeather using jQuery, Bootstrap and SASS and leveraged the OpenWeather API via Ajax and JSON.
When ModernOpenWeather receives the API request, the current weather information will update appropriately and
the background and font color of the page will change based upon what type of weather is occurring.

As of right now, I have custom styles made for the main weather types:

Type | weatherId | Color
-----|-----------|------
Thunder Storm | 200 - 232     | Yellow
Drizzle       | 300 - 321     | Teal
Rain          | 500 - 531     | Navy
Snow          | 600 - 622     | White
Clouds        | 801 - 804     | Gray
Severe        | 900, 901, 902 | Red
Clear         | 800           | Light Blue

### To Do
1. Ensure accuracy of color changes based on weatherId that the API call responds with. There seems to be a little
variance in ID 800 and 801, for example. Not sure if anything can be done about this.
