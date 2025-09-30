const prompt = require ("prompt-sync")();
let nombr = parseInt(prompt("Entrez un nombre :"));

if (nombr % 2 === 0) {
     console.log(nombr + " est pair.");
} else {
     console.log(nombr + " est impair.");
}

