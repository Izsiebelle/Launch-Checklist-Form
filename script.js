// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let coPilotNameInput = document.querySelector("input[name=copilotName]");
   let fuleLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document. getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");

   //Checks to see that all fields have input
   if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuleLevelInput.value === "" || cargoMassInput.value === "") {
      alert("All fields are required!");
   }else{
      faultyItems.style.visibility = "visible"; 
   }
   
   //Checks validity of pilots name
   if(!isNaN(pilotNameInput.value)){
      alert("Pilot name needs to be letters")
   }else{
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
   }
   
   //Checks validity of co-pilots name
   if(!isNaN(coPilotNameInput.value)){
      alert("Co Pilot name needs to be letters")
   }else{
      copilotStatus.innerHTML = `Co-pilot ${coPilotNameInput.value} is ready for launch`;
   }
   
   //Checks fuel level is number and higher than 10000
   if(isNaN(fuleLevelInput.value)){
      alert("Fuel Level needs to be a number")
   }else{
      if(fuleLevelInput.value < 10000){
         fuelStatus.innerHTML = `Fuel level is too low for launch`;
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
         launchStatus.style.color = 'red'; 
      }
   }
   
   //Checks cargo mass is a number and right weight to take off
   if(isNaN(cargoMassInput.value)){
      alert("Cargo Mass needs to be a number")
   }else{
      if(cargoMassInput.value > 10000){
         cargoStatus.innerHTML =`Cargo mass too high for launch`;
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
         launchStatus.style.color = 'red';
      }
   }

   if(cargoMassInput.value < 10000 && fuleLevelInput.value > 10000){
      fuelStatus.innerHTML = `Fuel level is high enough for launch`;
      cargoStatus.innerHTML =`Cargo mass is low enough for launch`;
      launchStatus.innerHTML = `Shuttle is Ready for Launch`;
      launchStatus.style.color = 'green';
      
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then( function(json) {
            let missionTarget = document.getElementById("missionTarget");
            let rand = Math.floor(Math.random() * json.length); 
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[rand].name}</li>
                  <li>Diameter: ${json[rand].diameter}</li>
                  <li>Star: ${json[rand].star}</li>
                  <li>Distance from Earth: ${json[rand].distance}</li>
                  <li>Number of Moons: ${json[rand].moons}</li>
               </ol>
               <img src="${json[rand].image}">`
         });
      });
   }

   event.preventDefault();
});

})



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

