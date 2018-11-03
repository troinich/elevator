var floors = document.getElementById("floors");
var floor = document.getElementsByClassName("floor");
var currentFloor = 0;
var buttonPushed = 0;
var lastFloor;
var isRunning = false;

for (var x = 0; x < 5; x++) {

    function clicked(x) {
        if (isRunning == true) {
            console.log("Running");
        } else {
            if (buttonPushed != x) {
                Object.assign(floor[x].style, { backgroundColor: "yellow" });
                buttonPushed = x;
            }
            moving();
        }
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
