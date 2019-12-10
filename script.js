// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
   let pilotNameInput = document.querySelector("input[name=pilotName]");
   let coPilotNameInput = document.querySelector("input[name=copilotName]");
   let fuleLevelInput = document.querySelector("input[name=fuelLevel]");
   let cargoMassInput = document.querySelector("input[name=cargoMass]");

   if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuleLevelInput.value === "" || cargoMassInput.value === "") {
      alert("All fields are required!");
   }

   if(!isNaN(pilotNameInput.value)){
      alert("Pilot name needs to be letters")
   }

   if(!isNaN(coPilotNameInput.value)){
      alert("Co Pilot name needs to be letters")
   }

   if(isNaN(fuleLevelInput)){
      alert("Fuel Level needs to be a number")
   }

   if(isNaN(cargoMassInput.value)){
      alert("Cargo Mass needs to be a number")
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

