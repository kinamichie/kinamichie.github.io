var section = document.getElementById('places');
var requestURL= 'https://kinamichie.github.io/assignments/temple-final/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
var southPlace = request.response;
northTemple(southPlace);
}                
                       
function northTemple(jsonObj) {
    var place = jsonObj['temple'];

    
    for (var i=0; i<place.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myList1 = document.createElement('ul');
        var myPara2 = document.createElement('p');
        var myPict = document.createElement('img');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myList2 = document.createElement('ul');
        var myPara6 = document.createElement('p');
        var myPara7 = document.createElement('p');
        var myPara8 = document.createElement('p');
        var myList3 = document.createElement('ul');
        var myPara9 = document.createElement('p');

        myH2.textContent = place[i].name;
        myPara1.textContent='Address:';
        var placeAddress = place[i].address;
        for (var j=0; j<placeAddress.length; j++) {
            var list1Item = document.createElement('li');
            list1Item.textContent = placeAddress[j];
            myList1.appendChild(list1Item);
        }
        myPara2.textContent = 'Telephone number: ' + place[i].telephone;
        myPict.src = 'images/image'+ i + '.jpeg';
        myPara3.textContent =  'Services: ' + place[i].services;
        myPara4.textContent = 'Email: ' + place[i].email;
        myPara5.textContent = 'History:';
        var placeHistory = place[i].history;
        for (var k=0; k<placeAddress.length; k++) {
            var list2Item = document.createElement('li');
            list2Item.textContent = placeHistory[k];
            myList2.appendChild(list2Item);
        }
        myPara6.textContent = 'Ordinance Schedule: ' + place[i].ordinance;
        myPara7.textContent = 'Sessions: ' + place[i].session;
        myPara8.textContent = 'Closures Schedule:';

        var placeClosure = place[i].closure;
        for (var m=0; m<placeAddress.length; m++) {
            var list3Item = document.createElement('li');
            list3Item.textContent = placeClosure[m];
            myList3.appendChild(list3Item);
        }
        myPara9.textContent = place[i].summary;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myList1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPict);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myList2);
        myArticle.appendChild(myPara6);
        myArticle.appendChild(myPara7);
        myArticle.appendChild(myPara8);
        myArticle.appendChild(myList3);
        
        section.appendChild(myArticle);
    }
}


