let forecastRequest = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
forecastRequest.open('Get', apiURLstring3, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
   
    console.log(forecastData);

       

    var number= 1;

    for (var i=0; i<forecastData.list.length; i+=8) {    
        document.getElementById('hight' + number).innerHTML=forecastData.list[i].main.temp + "&deg" + "F  ";
        number++;

        /*var d = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        document.getElementById("demo").innerHTML = days[d.getDay()];
        document.getElementById('today' + number).innerHTML = forecastData.list[i].dt_txt;

.


        /*let icon = "http://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";
     let des = weatherData.weather[0].description;

        document.getElementById('des' + icon).innerHTML=forecastData.list[i].weather[i].icon;
        icon++;

        document.getElementById('cc-img').setAttribute('src', icon);
        document.getElementById('cc=img').setAttribute('alt', des);*/

    }
}