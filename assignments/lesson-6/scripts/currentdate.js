
/*function myFunction() {
  var mydate  = new Date();
  var year = mydate.getFullYear();
    if (year < 1000){
      year +=1900
    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var montharray = new Array(12);
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
    var daym = mydate.getDate();
    var dayarray = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
  
    /*var n = weekday[d.getDay()];
    /*document.getElementById("display").innerHTML = n;*/
  function currentDate(){
    var mydate = new Date();
    var year = mydate.getFullYear();
      if(year < 1000){
        year +=1900
      }
      var day = mydate.getDay();
      var month = mydate.getMonth();
      var daym = mydate.getDate();
      var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
      var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December");

  
      var myDaily = document.getElementById("currentDate");
      myDaily.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;
      myDaily.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;

      setTimeout("currentDate()", 1000);
    }
    currentDate();

    