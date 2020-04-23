let forecastRequest = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
forecastRequest.open('Get', apiURLstring3, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
   
    console.log(forecastData);       

    
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
        let icon = "https://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";
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

    