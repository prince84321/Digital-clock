function DigitalClock(){

    var hours = document.getElementById("ghanta");
    var minute = document.getElementById("minutes");
    var second = document.getElementById("seconds");
    var ampm = document.getElementById("am");

    var time = new Date();

    var a = time.getHours();
    var AmOrPm = a >= 12 ? 'PM' : 'AM';
    d = (a % 12) || 12;
    var b = time.getMinutes();
    var c = time.getSeconds();

    hours.innerHTML = d;
    minute.innerHTML = b;
    second.innerHTML = c;
    ampm.innerHTML = AmOrPm;

    // if(a >= 00 && a < 12){
    //     ampm.innerHTML = "AM"
    // }

    // if(a >= 12 && a < 24){
    //     ampm.innerHTML = "PM"
    // }



    if(a >= 4 && a < 12){

         document.getElementById('set-image').style.backgroundImage="url(./img/morning_image.svg)";
         document.getElementById('content-1').innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
         document.getElementById('morning-text').innerHTML = "GOOD MORNING!! WAKE UP !!";

         
    }   

    if(a >= 12 && a< 15){

        document.getElementById('set-image').style.backgroundImage="url(./img/lunch_set.svg)";
        document.getElementById('content-1').innerHTML = "LET'S HAVE SOME LUNCH !!";
        document.getElementById('morning-text').innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }

    
    if(a >= 15 && a < 20){

         document.getElementById('set-image').style.backgroundImage="url(./img/lunch_image.png)";
         document.getElementById('content-1').innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
         document.getElementById('morning-text').innerHTML = "GOOD EVENING !!";
     }
     if(a >= 20 && a < 24){

         document.getElementById('set-image').style.backgroundImage="url(./img/night_image.png)";
         document.getElementById('content-1').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
         document.getElementById('morning-text').innerHTML = "GOOD NIGHT !!";

}
}

setInterval(DigitalClock, 1000);

function settime(){

var i = document.getElementById('select').value;
var j = document.getElementById('select-1').value;
var k = document.getElementById('select-2').value;
var l = document.getElementById('select-3').value;

 document.getElementById("s-1").innerHTML = i;
 document.getElementById("s-2").innerHTML = j;
 document.getElementById("s-3").innerHTML = k;
 document.getElementById("s-4").innerHTML = l;

}




    
