let swweatherRequest = new XMLHttpRequest();
let apiURLstring9 = 'https://api.openweathermap.org/data/2.5/forecast?id=4943629&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
swweatherRequest.open('Get', apiURLstring9, true);
swweatherRequest.send();

swweatherRequest.onload = function() {
    let weatherData = JSON.parse(swweatherRequest.responseText);
    //console.log(weatherData);
   

    
    document.getElementById('temp3').innerHTML = weatherData.list[0].main.temp.toFixed(0) +"&#8457";   
    

    let icon = "https://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png";
    let des = weatherData.list[0].weather[0].description;  

    document.getElementById('cc-img4').setAttribute('src', icon);
    document.getElementById('cc-img4').setAttribute('alt', des);
}
