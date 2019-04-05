var section = document.getElementById('temple');
var requestURL = 'https://kinamichie.github.io/temple.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload - function() {
    var myTemple = request.response;
    northTemple = (myTemple);
}
function northTemple(jsonObj) {
    var place = jsonObj['temple'];

    for (var i=0; i<place.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myList1 = document.createElement('ul');
        var myPara1 = document.createElement('p');
        var myPict = document.createElement('img');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList2 = document.createElement('ul');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myList3 = document.createElement('ul');
        
        myH2.textContent = place[i].name;
        var placeAddress = place[i].address;
        for (var j=0; j<placeAddress.length; j++) {
            var list1Item = document.createElement('li');
            list1Item.textContent = placeAddress[j];
            myList1.appendChild(list1Item);
        }
        myPara1.textContent = place[i].telephone;
        myPict.src = 'images.image'+i+'jpeg';
        myPara2.textContent = place[i].services;
        myPara3.textContent = place[i].email;
        var placeHistory = place[i].history;
        for (var k=0; k<placeAddress.length; k++) {
            var list2Item = document.createElement('li');
            list2Item.textContent = placeHistory[k];
            myList2.appendChild(list2Item);
        }
        myPara4.textContent = place[i].ordinance-schedule;
        myPara5.textContent = place[i].session-schedule;

        var placeClosure = place[i].closure;
        for (var m=0; m<placeAddress.length; m++) {
            var list3Item = document.createElement('li');
            list3Item.textContent = placeClosure[m];
            myList3.appendChild(list3Item);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myList1);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPict);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList2);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myList3);
        
        section.appendChild(myArticle);
    }
}