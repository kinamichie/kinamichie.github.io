	/*var tempf = parseInt(document.getElementById('tempfInput').innerHTML);
	var speed = parseInt(document.getElementById('speedInput').innerHTML);
	var chill = 35.74 + (0.6215 * tempf) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempf * Math.pow(speed, 0.16)); 
	document.getElementById('answer').innerHTML = chill.toFixed(1) + "&#8457";*/
	
/*get temp and wind speed from source*/
let windRequest = new XMLHttpRequest();
let apiURLstring4 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bf97aaaa16a02c56f0db0c5d12eb5eed';
windRequest.open('Get', apiURLstring4, true);
windRequest.send();

windRequest.onload = function() {
    let windchillData = JSON.parse(windRequest.responseText);
    console.log(windchillData);

	var temp = windchillData.list[0].main.temp;
	var speed = windchillData.list[0].wind.speed;
	/*do the math for data*/
	var chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16)); 
	document.getElementById('answer').innerHTML = chill.toFixed(0) + "&#8457";
	
}
    
	
	

