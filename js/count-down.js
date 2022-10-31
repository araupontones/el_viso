var raceDate = new Date("April 1, 2023 9:30:00");
var today = new Date().getTime();
var distance = raceDate - today;

var days = Math.floor(distance / (1000 * 60 * 60 * 24)) ;



if (days  < 0) {

  var days = 0
}


$(".count").html(days);
