//Code Your Solution Below
window.addEventListener("load", event =>{
    const docFormButton = document.getElementById("formSubmit");

    let testName = document.getElementById("testName"); 

    let dateEntry = document.getElementById("testDate");

    let rocketTypeSelect = document.getElementById("rocketType");

    let rocketBoosterCount = document.getElementById("rocketBoosterCount");
    
    docFormButton.addEventListener("click", event => {

        let alertMessage = "";

        if (testName.value === "") {
            alertMessage += "Name the test dawg\n";
            event.preventDefault();
        } 
        if (dateEntry.value === ""){
            alertMessage += "Provide a date please\n";
            event.preventDefault();
        }
        if (rocketTypeSelect.value === "0"){
            alertMessage += "Select a rocket type please\n";
            event.preventDefault();
        }

        if (rocketBoosterCount.value === ""){
            event.preventDefault();
            alertMessage += "Must select number of rocket boosters\n";
        }
        if (!document.getElementById("noWind").checked &&
            !document.getElementById("mild").checked &&
            !document.getElementById("strong").checked) {
                event.preventDefault();
                alertMessage += "must select wind rating\n";
            }
        if(alertMessage.length > 0){
            window.alert(alertMessage);
        }
    })
})