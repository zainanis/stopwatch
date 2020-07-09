var min=0;
var sec=0;
var msec=0;
var minHead=document.getElementById("min");
var secHead=document.getElementById("sec");
var msecHead=document.getElementById("msec");
var dis=document.getElementById("display");
var strtBtn=document.getElementById("strtBttn");
var interval;
var records = [];
var count=0;
function timer(){

   


    msec++
    msecHead.innerHTML = msec;
    if(msec>=100){

        sec++
        secHead.innerHTML=sec
        msec=0
    }
    else if(sec>=60){
        min++
        minHead.innerHTML=min
        sec=0
    }

}

function start(){
    strtBtn.disabled=true
   interval = setInterval(timer,10) 
}
function stop(){

    strtBtn.disabled=false
    clearInterval(interval)

 }
 function reset(){
     
    record=min+":"+sec+":"+msec+"<br>"
    dis.innerHTML=dis.innerHTML+record
  //  records[count]=record
    msec=0
    msecHead.innerHTML = msec;
    sec=0
    secHead.innerHTML=sec
    min=0
    minHead.innerHTML=min
    stop()

 }
 
