const prompt = require("prompt-sync")();
let entier = prompt("Enrer un entier : ");
let isPremier = true;
for(let i = 2 ; i< entier ; i++){
    if(entier % i === 0) isPremier = false;
    break
}
if(isPremier)console.log("Premier")
else console.log("non premier");


