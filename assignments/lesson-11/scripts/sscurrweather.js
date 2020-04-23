let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    //console.log(weatherData);

    
    document.getElementById('tempfInput').innerHTML = weatherData.list[0].main.temp;
    document.getElementById('curr').innerHTML = weatherData.list[0].weather[0].main;
    document.getElementById('humid').innerHTML = weatherData.list[0].main.humidity;
    document.getElementById('speedInput').innerHTML = weatherData.list[0].wind.speed;


}