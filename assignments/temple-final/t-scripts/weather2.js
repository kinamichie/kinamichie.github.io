let poweatherRequest = new XMLHttpRequest();
let apiURLstring8 = 'https://api.openweathermap.org/data/2.5/forecast?id=4720131&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
poweatherRequest.open('Get', apiURLstring8, true);
poweatherRequest.send();

poweatherRequest.onload = function() {
    let weatherData = JSON.parse(poweatherRequest.responseText);
    //console.log(weatherData);
   

    
    document.getElementById('temp2').innerHTML = weatherData.list[0].main.temp.toFixed(0) +"&#8457";   
     

    let icon = "https://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png";
    let des = weatherData.list[0].weather[0].description;  

    document.getElementById('cc-img3').setAttribute('src', icon);
    document.getElementById('cc-img3').setAttribute('alt', des);

}