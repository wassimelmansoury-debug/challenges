const prompt = require ("prompt-sync")();

let nombre = parseFloat(prompt("Entrez un nombre :"));

if (nombre > 0) {
    console.log(nombre + " est positif.");
} else if (nombr < 0) {
    console.log(nombre + " est négatif.");
} else {
    console.log("Le nombre est zéro.");
}
