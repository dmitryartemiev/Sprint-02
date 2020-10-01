"use strict";

let team, universe, race, eyeColor, hairColor;
team = prompt("Enter team");
universe = prompt('Enter universe')
race = prompt('Enter race')
eyeColor = prompt('Enter eye color')
hairColor = prompt('Enter hair color')

function heroDisplay() {
  if (team == "Avengers" || team == "S.H.I.E.L.D." &&
        universe == "Marvel" &&
        race == "human" &&
        eyeColor == "green" &&
         hairColor == "lightBrown/green"){
    alert("This is Black Widow");
  } else if (team == "Justice League of America" || team == "Teen Titans" && 
        universe == "DC Comics" &&
        race == "human" || race == "kryptonian" &&
        eyeColor == "blue" &&
        hairColor == "black"){
    alert("This is a Superman or Robin");
  } else {
    alert("Didn't recognize!");
  }
  return;
}
heroDisplay();
