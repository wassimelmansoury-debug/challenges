const prompt = require ("prompt-sync")();
let anné = prompt("demmande d'une anné:");
if (anné % 4 === 0 && anné % 100 > 0  ){
console.log("Année bissextile");
} else {
    console.log ("Année non bissextile");
}

