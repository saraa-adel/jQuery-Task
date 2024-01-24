// home
$('.menu-open').click(function(){
     $('.emptyspace , .menu').animate({width: '18%'})
     $('.menu').css({ fontSize: '100%'})
,1000})
$('.close').click(function(){
     $('.emptyspace , .menu').animate({width:'0%'})
     $('.menu').css({fontSize:'0%'})
,1000})



// duration
$('#duration h3').click(function() {
     var clicked = $(this).next('p');
      $('#duration p').not(clicked).slideUp(800);
      clicked.slideToggle(800);
 });


// details
var days = document.getElementById('days')
var hours = document.getElementById('hours')
var mins = document.getElementById('mins')
var secs = document.getElementById('secs')


var countDown = new Date("Oct 10, 2021 9:56:00").getTime()

var x = setInterval(function() {
  var now = new Date().getTime()
  var distance = countDown - now
    
  var d = Math.floor(distance / (1000 * 60 * 60 * 24))
  var h = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  var m = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
  var s = Math.abs(Math.floor((distance % (1000 * 60)) / 1000))
    
  days.innerHTML = d +' D'
  hours.innerHTML = h +' h'
  mins.innerHTML = m +' m'
  secs.innerHTML = s +' s'
}, 1000)


// contact
var finished = document.getElementById('chars')
$(document).ready(function() {
     var textArea = $('textarea');
     var chars = $('#chars');
     var textMax = 100;
   
     chars.html(textMax);
     textArea.on('keyup', countChar);
     
     function countChar() {
         var textLength = textArea.val().length;
         var textRemaining = textMax - textLength;
         if(textRemaining >=0){
              chars.html(textRemaining);
          }else{
               finished.innerHTML = 'your available character finished'
          }
     };
 });
