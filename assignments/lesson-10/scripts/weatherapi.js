let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp;

    let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    let des = weatherData.weather[0].description;

    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', des);
}