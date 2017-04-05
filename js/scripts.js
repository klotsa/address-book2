//business logic
function Ticket(movie, age, time) {
  this.movieType = movie;
  this.ageType = age;
  this.timeType = time;
  console.log("1");
}
console.log("2");

Ticket.prototype.ticketPrice = function () {
  var total = 0;
  var movieCost = 0;
  var ageCost = 0;
  var timeCost = 0;
    console.log("3");


if (this.movieType === "old") {
  movieCost = 10;
} else {
  movieCost = 15;

}
  alert(movieCost);
console.log("4");

if(this.ageType === "adult") {
  ageCost = 10;
} else {
  ageCost = 5;
}
alert(ageCost);

if (this.timeCost === "morning") {
  timeCost = 5;

} else {
  timeCost = 10;

}
alert(timeCost);
   total = movieCost + ageCost + timeCost;
   console.log(total);
}





// user interface logic
$(document).ready(function() {

  $("form#movie-ticket").submit(function(event) {
    event.preventDefault();

    var movieInput = $("#movies").val();
    var ageInput = $("#age").val();
    var timeInput = $("#time").val();
    var newTicket = new Ticket(movieInput, timeInput, ageInput);

    console.log(movieInput, ageInput, timeInput);
    // $("#ticket-price").show();
    $(".price").text(newTicket.ticketPrice());

  });
});
