"use strict";

let animalName, gendRangeer, age;
function fail() {
  alert("Input is not valid");
}
animalName = prompt("What animal is the superhero most similar to?");
if (!animalName.match(/\b[a-z]{1,20}\b/i)) {
  fail();
} else {
  gendRangeer = prompt(
    "Is the superhero male or female? Leave blank if unknown or other"
  );
  if (!gendRangeer.match(/(^$|female|male)/i)) {
    fail();
  } else {
    age = prompt("How old is the superhero?");
    if (!age.match(/\b[1-9]{1,5}\b/)) {
      fail();
    } else {
      if (age < 18) {
        if (gendRangeer.match(/^$/)) {
          gendRangeer = gendRangeer.replace(/^$/, "-kid");
        } else {
          gendRangeer = gendRangeer.replace(/female/i, "-girl");
          gendRangeer = gendRangeer.replace(/male/i, "-boy");
        }
      } else {
        if (gendRangeer.match(/^$/)) {
          gendRangeer = gendRangeer.replace(/^$/, "-hero");
        } else {
          gendRangeer = gendRangeer.replace(/female/i, "-woman");
          gendRangeer = gendRangeer.replace(/male/i, "-man");
        }
      }
      alert("The superhero name is: " + animalName + gendRangeer + "!");
    }
  }
}
