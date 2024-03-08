// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", event =>{
    let rocketImage = document.getElementById("rocket");
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");

    let upButton = document.getElementById("up");
    let rightButton = document.getElementById("right");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    
    rocketImage.style.position = "absolute";
    rocketImage.style.bottom = "0px";
    rocketImage.style.left = "0px";



    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    takeOffButton.addEventListener("click", event =>{
        let confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (confirmTakeoff === true) {
            

            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });
    landButton.addEventListener("click", event =>{
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        originalRocketPosition();
    });

    abortButton.addEventListener("click", event => {
        let abortConfirm = window.confirm("Confirm that you want to abort the mission.");

        if(abortConfirm === true){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            originalRocketPosition();
        }
    });

    upButton.addEventListener("click", event =>{
        let currentBottom = parseInt(rocketImage.style.bottom);
        let shuttleBackgroundHeight = shuttleBackground.offsetHeight; //read MDN: HTMLElement: offsetHeight property if you forget
        let rocketImageHeight = rocketImage.offsetHeight;
        let maxHeight = shuttleBackgroundHeight - rocketImageHeight;
        let updateBottom = currentBottom + 10;

        if (updateBottom > maxHeight){
            updateBottom = maxHeight;
        } else {
            rocketImage.style.bottom = updateBottom + "px";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });

    rightButton.addEventListener("click", event =>{
        let currentRight = parseInt(rocket.style.left);
        let shuttleBackgroundWidth = shuttleBackground.offsetWidth;
        let rocketImageWidth = rocketImage.offsetWidth;
        let maxWidth = shuttleBackgroundWidth - rocketImageWidth;
        let updateRight = currentRight + 10;

        if (updateRight > maxWidth){
            updateBottom = maxWidth;
        } else { 

        rocketImage.style.left = updateRight + "px";
        }
    });

    downButton.addEventListener("click", event =>{
        
        let currentBot = parseInt(rocket.style.bottom);
        let updateBot = currentBot - 10;
        
        if (updateBot < 0){
            updateBot = 0;
        } else {
        rocketImage.style.bottom = updateBot + "px";
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    });

    leftButton.addEventListener("click", event =>{
        let currentLeft = parseInt(rocket.style.left);
        let updateLeft = currentLeft - 10;

        if (updateLeft < 0){
            updateLeft = currentLeft;
        }
        rocketImage.style.left = updateLeft + "px";
    });

    function originalRocketPosition(){
        rocketImage.style.bottom = 0 + "px";
        rocketImage.style.left = 0 + "px";
    }
})