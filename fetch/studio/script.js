window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) =>{ 
        //access the json in the response: 
        response.json().then((json) =>{
            console.log(json);
            const containerDiv = document.getElementById("container");
            json = json.sort((a, b) => a.hoursInSpace - b.hoursInSpace)
            let count = 0;
            
            for (let astronaut of json){
                let skills = "";
                skills += astronaut.skills;
                skills = skills.split(",").join(", ");
                let picture = astronaut.picture;

                let color = "";
                if (astronaut.active === true){
                    color = "green"
                }
                
                containerDiv.innerHTML += `
                <div class = "astronaut">
                    <div class = "bio">
                        <div class = "name">
                            <h3> ${astronaut.firstName} ${astronaut.lastName}
                        </div>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            
                            <li style = "${color}">Active: ${astronaut.active} </li>
                            
                            <li>Skills: ${skills} </li>
                        </ul>
                    </div>
                    <img class = "avatar" src = ${picture}>
                </div>
                `
            }
            
        });
    });
})


