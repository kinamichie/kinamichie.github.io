let aaweatherRequest = new XMLHttpRequest();
let apiURLstring6 = 'https://api.openweathermap.org/data/2.5/forecast?id=5879400&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
aaweatherRequest.open('Get', apiURLstring6, true);
aaweatherRequest.send();

aaweatherRequest.onload = function() {
    let weatherData = JSON.parse(aaweatherRequest.responseText);
    console.log(weatherData);
   

    
    document.getElementById('temp0').innerHTML = weatherData.list[0].main.temp.toFixed(0) +"&#8457";   

    let icon = "https://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png";
    let des = weatherData.list[0].weather[0].description;      
        
    document.getElementById('cc-img1').setAttribute('src', icon);
    document.getElementById('cc-img1').setAttribute('alt', des);
}