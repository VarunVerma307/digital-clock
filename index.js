console.log("js");
let SpanHours = document.getElementById("hours");
let SpanMinutes = document.getElementById("minutes");
let SpanSeconds = document.getElementById("seconds");
let amORpm = document.getElementById("am-pm"); 


function currentTime(){
 let date = new Date();
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let second = date.getSeconds();
 let am;
   SpanHours.innerText=hours;
   SpanMinutes.innerText=minutes;
   SpanSeconds.innerText=second;
   if(hours>=0 || hours <=12){
       am="AM";
   }
   else{
       am="PM"
   }
   amORpm.innerText=am;
}
setInterval(currentTime , 1000);