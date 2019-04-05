var section = document.getElementById('places');
var requestURL= 'https://kinamichie.github.io/assignments/temple-final/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var someTemple = request.response;
    northTemple = (someTemple);
}                
                       
function northTemple(jsonObj) {
    var place = jsonObj['temple'];

    for (var i=0; i<place.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myList = document.createElement('ul');
        
        
        myH2.textContent = place[i].name;
        var placeAddress = place[i].address;
        for (var j=0; j<placeAddress.length; j++) {
            var list1Item = document.createElement('li');
            list1Item.textContent = placeAddress[j];
            myList.appendChild(listItem);
        }
      

        myArticle.appendChild(myH2);
        myArticle.appendChild(myList);
      
        
        section.appendChild(myArticle);
    }
}

