let forecastRequest = new XMLHttpRequest();
let apiURLstring3 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
forecastRequest.open('Get', apiURLstring3, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
   
    console.log(forecastData);       

    var index=0;
    var day =(new Date().getDay()+1)%7;
    var section=document.getElementById('forecast');


    while (day != new Date(forecastData.list[index].dt_txt).getDay())index++;
    while (!forecastData.list[index].dt_txt.includes("18:00:00"))index++;
    for (var today=0; today<5; today++) {

    var article=document.createElement('article');
    var header=document.createElement('h4');
    var image=document.createElement('img');
    var para=document.createElement('p');
    

    header.textContent=GetDayName(day);
    image.src="http://openweathermap.org/img/w/" + forecastData.list[index].weather[0].icon + ".png";
    image.alt=forecastData.list[index].weather[0].description;
    para.textContent=Math.round(forcastData.list[].main.temp) + "&deg" + "F";

    article.appendChild(header);
    article.appendChild(image);
    article.appendChild(para);

    section.appendChild(article);
    day=(day+1)%7;
    index+=8;
}
}

//names of week
   function GetDayName(aDay) 
       {
        var result = "MON";
        switch (aDay % 7) {
        case 0:result = "Sun";
        break;
        case 1:result= "Mon";
        break;
        case 2:result = "Tue";
        break;
        case 3:result = "Wed";
        break;
        case 4:result = "Thu";
        break;
        case 5:result = "Fri";
        break;
        case 6:result = "Sat";
        break;

}        
        return result;

}
    