var floors = document.getElementById("floors");
var floor = document.getElementsByClassName("floor");
var currentFloor = 0;
var buttonPushed = 0;
var lastFloor;
var isRunning = false;

function OneClicked() {
    if (isRunning == true) {
        console.log("Running");
    } else {
        if(buttonPushed != 0) {
            Object.assign(floor[0].style,{backgroundColor:"yellow"});
            buttonPushed = 0;
        }
        moving();
    }
}

function TwoClicked() {
    if (isRunning == true) {
        console.log("Running");
    } else {
        if(buttonPushed != 1) {
            Object.assign(floor[1].style,{backgroundColor:"yellow"});
            buttonPushed = 1;
        }
        moving();
    }
}

function ThreeClicked() {

    if (isRunning == true) {
        console.log("Running");
    } else {
        if(buttonPushed != 2) {
            Object.assign(floor[2].style,{backgroundColor:"yellow"});
            buttonPushed = 2;
        }
        moving();
    }
}

function FourClicked() {

    if (isRunning == true) {
        console.log("Running");
    } else {
        if(buttonPushed != 3) {
            Object.assign(floor[3].style,{backgroundColor:"yellow"});
            buttonPushed = 3;
        }
        moving();
    }
}

function FiveClicked() {

    if (isRunning == true) {
        console.log("Running");
    } else {

    if(buttonPushed != 4) {
        Object.assign(floor[4].style,{backgroundColor:"yellow"});
        buttonPushed = 4; 
    }    
    moving();
    }
}

function moving() {

    isRunning = true;
    var interval = setInterval(function(){

    if (currentFloor == buttonPushed) {
        clearInterval(interval);
        isRunning = false;
    } else if(currentFloor <= buttonPushed) {
        currentFloor++;
        lastFloor = currentFloor;
        Object.assign(floor[currentFloor].style,{backgroundColor:"green"});
        lastFloor--;    
        Object.assign(floor[(lastFloor)].style,{backgroundColor:"black"});
    } else if (currentFloor >= buttonPushed) {
        currentFloor--;
        lastFloor = currentFloor;
        Object.assign(floor[currentFloor].style,{backgroundColor:"green"});
        lastFloor++;
        Object.assign(floor[lastFloor].style,{backgroundColor:"black"});
    }

},1000);


}
