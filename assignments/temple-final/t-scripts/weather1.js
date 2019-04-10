let moweatherRequest = new XMLHttpRequest();
let apiURLstring7 = 'https://api.openweathermap.org/data/2.5/forecast?id=4943629&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
moweatherRequest.open('Get', apiURLstring7, true);
moweatherRequest.send();

moweatherRequest.onload = function() {
    let weatherData = JSON.parse(moweatherRequest.responseText);
    //console.log(weatherData);
   

    
    document.getElementById('temp1').innerHTML = weatherData.list[0].main.temp.toFixed(0) +"&#8457";   
    
    let icon = "https://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png";
    let des = weatherData.list[0].weather[0].description;  

    document.getElementById('cc-img2').setAttribute('src', icon);
    document.getElementById('cc-img2').setAttribute('alt', des);
}
