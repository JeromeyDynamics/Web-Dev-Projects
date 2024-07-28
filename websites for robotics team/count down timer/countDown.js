// Set the date we're counting down to
var countDownDate = new Date("September 27, 2024, 8:00:00").getTime();
console.log("count down date in UTC: September 27, 2024, 8:00:00");

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var utcNow = new Date().toUTCString();
    var now = new Date(utcNow).getTime();
    console.log("UTC time now: " + utcNow);

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //sees if each unit of dates is one digit to then put a 0 in front
    days = [days].toString().split('').length == 1 ? '0' + days : days;
    hours = [hours].toString().split('').length == 1 ? '0' + hours : hours;
    minutes = [minutes].toString().split('').length == 1 ? '0' + minutes : minutes;
    seconds = [seconds].toString().split('').length == 1 ? '0' + seconds : seconds;

    // Output the result in an element with id="demo"
    document.getElementById("timerNumbers").innerHTML = days + ":" + hours + ":"
    + minutes + ":" + seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timerNumbers").innerHTML = "Robo Rumble!";
    }
}, 1000);