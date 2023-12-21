"use strict";
const leeftijdStudent = 38;
const achternaam = "nijs";
const isStudent = true;
console.log(`De leeftijd van ${achternaam} is ${leeftijdStudent}.`);
const dagenVanDeWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
console.log(`vandaag is het ${dagenVanDeWeek[3]}`);
const persoonInfo = [38, "bart"];
console.log(`persoon info: Naam is ${persoonInfo[1]} en de leeftijd is ${persoonInfo[0]}`);
var windrichting;
(function (windrichting) {
    windrichting[windrichting["noord"] = 0] = "noord";
    windrichting[windrichting["oost"] = 1] = "oost";
    windrichting[windrichting["zuid"] = 2] = "zuid";
    windrichting[windrichting["west"] = 3] = "west";
})(windrichting || (windrichting = {}));
const huidigeRichting = windrichting.noord;
console.log(`de wind komt uit ${windrichting[huidigeRichting]}`);
var seizoenen;
(function (seizoenen) {
    seizoenen[seizoenen["spring"] = 0] = "spring";
    seizoenen[seizoenen["summer"] = 1] = "summer";
    seizoenen[seizoenen["autumn"] = 2] = "autumn";
    seizoenen[seizoenen["winter"] = 3] = "winter";
})(seizoenen || (seizoenen = {}));
const huidigSeizoen = seizoenen.autumn;
console.log(huidigSeizoen);
var planets;
(function (planets) {
    planets["mercury"] = "small and close to the sun";
    planets["venus"] = "similar to earth, but very hot";
    planets["earth"] = "our home planet";
    planets["mars"] = "the red planet";
    planets["jupiter"] = "the largest planet";
    planets["saturn"] = "know for iets rings";
    planets["uranus"] = "an ice gaint";
    planets["neptune"] = "a distant blue world";
})(planets || (planets = {}));
const favoritePlanetInfo = planets.saturn;
console.log(`mijn favoriete planeet is ${favoritePlanetInfo}`);
let mijnData = "dit kan alles zijn!";
mijnData = 100; //dit is geldig met 'any' type
let externeInput;
externeInput = "wat je wil intikken";
console.log(`mijn data : ${mijnData}`);
console.log(`externe input: ${externeInput}`);
