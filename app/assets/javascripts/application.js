// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$(document).ready(function() {



  $('#my-link').click(function(event){
    alert('Hooray!');
    event.preventDefault(); // Prevent link from following its href
  });

  $('#Start').click(function(event){
    event.preventDefault(); // Prevent link from following its href

    countDown(1500,"status");
  });

  function countDown(secs,elem) {
    // alert('Start22!');
    var element = document.getElementById(elem);
    element.innerHTML = "Please wait for "+secs+" seconds";
    if(secs < 1) {
      // clearTimeout(timer);
      element.innerHTML = '<h2>Countdown Complete!</h2>';
      element.innerHTML += '<a href="#">Click here now</a>';
    }
    secs--;
    // http://stackoverflow.com/a/24336939/3828654
    setTimeout(function() { countDown(secs,elem); }, 1000);
    // setTimeout(countDown(secs,elem),1000);
    // var timer = setTimeout(countDown(secs,elem),1000);
  };



});
