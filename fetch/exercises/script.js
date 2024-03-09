window.addEventListener("load", event =>{
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(response =>{
        response.json().then(rawJson => {
            console.log(rawJson);
            let clickCount = 0;
            const destination = document.getElementById("destination");
            destination.addEventListener("click", event =>{
                
                clickCount = (clickCount + 1) % rawJson.length;
                destination.innerHTML = `
                <div>
                    <h3> Planet ${rawJson[clickCount].name}</h3>;
                    <img src = ${rawJson[clickCount].image} height = 250/>
                </div>
                    `
            })
            
        })
    })
 });