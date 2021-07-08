// Scroll effect on navbar
$(window).scroll(function () {
  if ($(window).scrollTop() >= 330) {
    $("nav").addClass("fixed-header");
    $("nav img").addClass("visible-title");
    $("nav").css("background", "#001034d9");
    $("nav").css("transition", "max-height 0.5s ease 0s");
  } else {
    $("nav").removeClass("fixed-header");
    $("nav img").removeClass("visible-title");
    $("nav").css("background", "none");
  }
});

// Pop-Up model
$(document).ready(function () {
  var id = "#dialog";
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $("#mask").css({ width: maskWidth, height: maskHeight });
  $("#mask").fadeIn(500);
  $("#mask").fadeTo("slow", 0.9);
  var winH = $(window).height();
  var winW = $(window).width();
  $(id).css("top", winH / 2 - $(id).height() / 2);
  $(id).css("left", winW / 2 - $(id).width() / 2);
  $(id).fadeIn(2000);
  $(".window .close").click(function (e) {
    e.preventDefault();
    $("#mask").hide();
    $(".window").hide();
  });
  $("#mask").click(function () {
    $(this).hide();
    $(".window").hide();
  });
});

// Countdown timer

var eventTime =   '1623530579'; 
var currentTime = moment().unix();

var diffTime = eventTime - currentTime;
var duration = moment.duration(diffTime, 'seconds');
var interval = 1;

setInterval(function () {
    duration = moment.duration(duration.asSeconds() - interval, 'seconds');
    $('.countdown_Days').text(duration.days());
    $('.countdown_Hours').text(duration.hours());
    $('.countdown_Min').text(duration.minutes());
    $('.countdown_Sec').text(duration.seconds());
}, 1000);
