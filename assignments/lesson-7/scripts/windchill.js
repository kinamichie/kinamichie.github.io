	var tempf = parseInt(document.getElementById('tempfInput').innerHTML);
	var speed = parseInt(document.getElementById('speedInput').innerHTML);
	var chill = 35.74 + (0.6215 * tempf) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempf * Math.pow(speed, 0.16)); 
	document.getElementById('answer').innerHTML = chill.toFixed(1) + "&#8457";
	

	
	
	

