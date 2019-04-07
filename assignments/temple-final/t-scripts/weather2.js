let weatherRequest = new XMLHttpRequest();
let apiURLstring8 = 'https://api.openweathermap.org/data/2.5/forecast?id=4720131&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
weatherRequest.open('Get', apiURLstring8, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);
   

    
    document.getElementById('temp2').innerHTML = weatherData.list[0].main.temp.toFixed(0) +"&#8457";   

}