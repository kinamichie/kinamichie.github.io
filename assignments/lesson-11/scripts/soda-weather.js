let forecastRequest = new XMLHttpRequest();
let apiURLstring5 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
forecastRequest.open('Get', apiURLstring5, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
   
    console.log(forecastData);  
         
    document.getElementById('tempfInput').innerHTML = forecastData.list[0].main.temp;
    document.getElementById('curr').innerHTML = forecastData.list[0].weather[0].main;
    document.getElementById('humid').innerHTML = forecastData.list[0].main.humidity;
    document.getElementById('speedInput').innerHTML = forecastData.list[0].wind.speed;
    
    var temp = forecastData.list[0].main.temp;
	var speed = forecastData.list[0].wind.speed;
	/*do the math for data*/
	var chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)); 
	document.getElementById('answer').innerHTML = chill.toFixed(0) + "&#8457";


    
    var number=1;
    for (var i=0; i<forecastData.list.length; i++) { 
        if (forecastData.list[i].dt_txt.includes("18:00:00")) {
            var weekDay = new Date().getDay()+number;
            if(weekDay > 6){
                weekDay = weekDay%7;
            }            
    
            switch (weekDay) {
                case 0:weekDay = "Sun";break;
                case 1:weekDay = "Mon";break;
                case 2:weekDay = "Tue";break;
                case 3:weekDay = "Wed";break;
                case 4:weekDay = "Thu";break;
                case 5:weekDay = "Fri";break;
                case 6:weekDay = "Sat";break;
                default: weekDay="MON";break;
            }
           
                       
        //days
        document.getElementById('day' + number).innerHTML= weekDay;          

        //weather icon
        let icon = "http://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";
        let des = forecastData.list[i].weather[0].description;      
        
        document.getElementById('cc-img' + number).setAttribute('src', icon);
        document.getElementById('cc-img' + number).setAttribute('alt', des);

        //temp 
        document.getElementById('hight' + number).innerHTML=forecastData.list[i].main.temp + "&deg" + "F";
        number++;             
    }
    else{}
    } 
    }

    