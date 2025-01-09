var raceDate = new Date("April 12, 2025 0:00:01");
var today = new Date().getTime();
var distance = raceDate - today ;

var days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1  ;


//turn 0 if the today is greater that the race
if (days  < 0) {

  var days = 0
}


$(".count").html(days);
