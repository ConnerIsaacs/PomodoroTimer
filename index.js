var sessionObj = {};
$(document).ready(function(){
  var sessionTime = $(".slider1"); //selector for session length
  var breakTime = $(".slider2"); //selector for break length
  var start = $("#start"); //selecter for start button
  var minute = document.getElementById("minute"); //variable for minute part of time
  var second = document.getElementById("second"); //variable for second part of time
  var isBreak = false; //variable to determine if it is currently break
var isClicked = false;
  sessionObj.seconds = 0; //sets intro key of seconds object to 0
  sessionObj.minutes = 0;
  start.on('click',function(){
    sessionObj.seconds = 0;
    second.innerHTML = "00"
    sessionObj.minutes = sessionTime.val();
     var x = SessioncountDown(session,minute,isBreak,isClicked);
    isClicked = true;
    minute.innerHTML = sessionObj.minutes;
    
  })
})
function SessioncountDown(session,minute,isBreak,isClicked){
   var x = setInterval(function(){
    sessionObj.seconds -= 1;
    if(sessionObj.seconds == -1){
      if(sessionObj.minutes != 0){
        minute.innerHTML = sessionObj.minutes -1;
        sessionObj.minutes -= 1;
        sessionObj.seconds = 59;
      }
      else{
        sessionObj.seconds = 59;
        if(isBreak === false){
          sessionObj.minutes = $(".slider2").val();
          minute.innerHTML = sessionObj.minutes -1;
          sessionObj.minutes -= 1;
          $("#whatDoing").html("Currently: <strong>On Break</strong>");
          isBreak = true;
        } 
        else{
          sessionObj.minutes = $(".slider1").val();
          minute.innerHTML = sessionObj.minutes -1;
          sessionObj.minutes -= 1;
          $("#whatDoing").html("Currently: <strong>Studying</strong>");
          isBreak = false;
        }
      }
    }
     
    if(sessionObj.seconds < 10){
      second.innerHTML = "0" + sessionObj.seconds;
    }
    else{
      second.innerHTML = sessionObj.seconds;
    }   
  },1000);
  if(isClicked){
    clearInterval(x);
  }
}