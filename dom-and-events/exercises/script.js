function init () {
    const missionAbort = document.getElementById("abortMission");
    const liftoffButton = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    
    liftoffButton.addEventListener("click", event => {
        paragraph.innerHTML = "Houston, we have liftoff!";
        event.target.style.backgroundColor = "green";
        event.target.style.border = "2px solid red";
    });
    missionAbort.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "red";
    })
    missionAbort.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "";
    })
    missionAbort.addEventListener("click", event =>{
        let userResponse = window.confirm("Click to confirm mission abort");

        if (userResponse){
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home." 
            liftoffButton.style.backgroundColor = "red";
            liftoffButton.style.border = "";
        }  
    })
}

window.addEventListener("load", init);
