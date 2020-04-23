var section = document.getElementById('events');
var requestURL= 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var southPlace = request.response;
idahoPlace(southPlace);
}

function idahoPlace(jsonObj) {
var place = jsonObj['towns'];

for (var i = 0; i < place.length; i++) {
if (place[i].name=="Soda Springs") 
{
var myArticle = document.createElement('article');
var myH2 = document.createElement('h2');
var myH4 = document.createElement('h4');
var myPara1 = document.createElement('p');
var myPara2 = document.createElement('p');
var myPara3 = document.createElement('p');                            
var myPicts = document.createElement('img');
var myList = document.createElement('ul');


                               
var placeEvents = place[i].events;
for (var j = 0; j < placeEvents.length; j++) {
var listItem = document.createElement('li');
listItem.textContent = placeEvents[j];
myList.appendChild(listItem);
}

myArticle.appendChild(myH2);
myArticle.appendChild(myH4);
myArticle.appendChild(myPara1);
myArticle.appendChild(myPara2);
myArticle.appendChild(myPara3);
myArticle.appendChild(myPicts);                                                       
myArticle.appendChild(myList);

section.appendChild(myArticle);
}}
}
