var floors = document.getElementById("floors");
var floor = document.getElementsByClassName("floor");
var elevator = 0;
var currentFloor = 0;
var buttonPushed = 0;
var lastFloor;

function OneClicked() {
    if(buttonPushed != 0) {
        Object.assign(floor[0].style,{backgroundColor:"yellow"});
        buttonPushed = 0;
    }
    setInterval(moving(), 1000);
}

function TwoClicked() {
    if(buttonPushed != 1) {
        Object.assign(floor[1].style,{backgroundColor:"yellow"});
        buttonPushed = 1;
    }
    setInterval(moving(), 1000);
}

function ThreeClicked() {
    if(buttonPushed != 2) {
        Object.assign(floor[2].style,{backgroundColor:"yellow"});
        buttonPushed = 2;
    }
    setInterval(moving(), 1000);
}

function FourClicked() {
    if(buttonPushed != 3) {
        Object.assign(floor[3].style,{backgroundColor:"yellow"});
        buttonPushed = 3;
    }
    setInterval(moving(), 1000);
}

function FiveClicked() {

    if(buttonPushed != 4) {
        Object.assign(floor[4].style,{backgroundColor:"yellow"});
        buttonPushed = 4;
    }
    setInterval(moving(), 1000);   
}

function moving() {

    var i = currentFloor;

    var interval = setInterval(function(){

    console.log("1. i: " + i + " currentFloor: " + currentFloor);

    if (currentFloor == buttonPushed) {
        clearInterval(interval);
    } else if(currentFloor <= buttonPushed) {
        currentFloor++;
        lastFloor = currentFloor;
        Object.assign(floor[currentFloor].style,{backgroundColor:"green"});
        lastFloor--;    
        Object.assign(floor[(lastFloor)].style,{backgroundColor:"black"});
        console.log("2. i: " + i + " currentFloor: " + currentFloor + " Button: " + buttonPushed + " Last Upp: " + lastFloor);
    } else if (currentFloor >= buttonPushed) {
        currentFloor--;
        lastFloor = currentFloor;
        Object.assign(floor[currentFloor].style,{backgroundColor:"green"});
        lastFloor++;
        console.log("3. i: " + i + " currentFloor: " + currentFloor + " Button: " + buttonPushed);
        Object.assign(floor[lastFloor].style,{backgroundColor:"black"});
    }

},1000);


}
