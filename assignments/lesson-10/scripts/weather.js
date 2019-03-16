let forecastRequest = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
forecastRequest.open('Get', apiURLstring3, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
   
    console.log(forecastData);

       

    /*
    for (var i=0; i<forecastData.list.length; i+=8) {    
    var myDay = document.createElement('h2');
    var myicon = document.createElement('img'); 
    var mytemp = document.createElement('p');
    myDay.textContent=forecastData.list[i].dt_txt
    myicon.img = forecastData.list[i].weather[i].icon;  
    mytemp.textContent= forecastData.list[i].main.temp;
    
    }

    
    /*document.getElementById('des').innerHTML =  
    document.getElementById('today'),innerHTML = forecastData.list[i].dt_txt; 
    document.getElementById('hight').innerHTML = forecastData.list[i].main.temp_max;
    document.getElementById('des').setAttribute('src', icon);
    document.getElementById('des').setAttribute('alt', des);

    }  */
}