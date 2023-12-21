const leeftijdStudent: number = 38;
const achternaam: string = "nijs";
const isStudent: boolean = true;
console.log(`De leeftijd van ${achternaam} is ${leeftijdStudent}.`);

const dagenVanDeWeek: string[] = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
console.log(`vandaag is het ${dagenVanDeWeek[3]}`);

const persoonInfo: [leeftijd: number, naam: string] = [38, "bart"];
console.log(`persoon info: Naam is ${persoonInfo[1]} en de leeftijd is ${persoonInfo[0]}`);

enum windrichting {
    noord,
    oost,
    zuid,
    west
}
const huidigeRichting: windrichting = windrichting.noord;
console.log(`de wind komt uit ${windrichting[huidigeRichting]}`);

enum seizoenen {
    spring,
    summer,
    autumn,
    winter
}
const huidigSeizoen: seizoenen = seizoenen.autumn;
console.log(huidigSeizoen);

enum planets {
    mercury = "small and close to the sun",
    venus = "similar to earth, but very hot",
    earth = "our home planet",
    mars = "the red planet",
    jupiter = "the largest planet",
    saturn = "know for iets rings",
    uranus = "an ice gaint",
    neptune = "a distant blue world"
}
const favoritePlanetInfo: planets = planets.saturn;
console.log(`mijn favoriete planeet is ${favoritePlanetInfo}`);

let mijnData: any = "dit kan alles zijn!";
mijnData = 100; //dit is geldig met 'any' type
let externeInput: unknown;
externeInput = "wat je wil intikken";

console.log(`mijn data : ${mijnData}`);
console.log(`externe input: ${externeInput}`);