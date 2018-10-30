var floors = document.getElementById("floors");
var floor = document.getElementsByClassName("floor");
var elevator = 0;
var currentFloor = 0;
var buttonPushed = 0;
var myTime = setInterval(moving, 5000);

function OneClicked() {
    if(buttonPushed != 0) {
        Object.assign(floor[0].style,{backgroundColor:"red"});
    buttonPushed = 0;
    }
    
}

function TwoClicked() {
    if(buttonPushed != 1) {
        Object.assign(floor[1].style,{backgroundColor:"red"});
    buttonPushed = 1;
    }
}

function ThreeClicked() {
    if(buttonPushed != 2) {
        Object.assign(floor[2].style,{backgroundColor:"red"});
    buttonPushed = 2;
    }
}

function FourClicked() {
    if(buttonPushed != 3) {
        Object.assign(floor[3].style,{backgroundColor:"red"});
    buttonPushed = 3;
    }
}

function FiveClicked() {
    if(buttonPushed != 4) {
        Object.assign(floor[4].style,{backgroundColor:"red"});
    buttonPushed = 4;
    }

    moving();
    
}

function moving() {

    if(currentFloor < buttonPushed) {
        for(i = currentFloor; i < buttonPushed; i++) {

            Object.assign(floor[i].style,{backgroundColor:"green"});
        }
        Object.assign(currentFloor.style,{backgroundColor:"green"});
    }

}

function setDelay(i) {
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

var tid = setTimeout(mycode, 2000);
function mycode() {
 // do some stuff...
 tid = setTimeout(mycode, 2000); // repeat myself
}
function abortTimer() { // to be called when you want to stop the timer
 clearTimeout(tid);
}