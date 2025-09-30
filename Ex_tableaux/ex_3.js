const prompt = require(" prompt-sync ")();
let tab = [];
for (let i = 0; i < 8; i++) {
  tab.push(parseInt(prompt("Entrez un nombre : ")));
}

let rech = parseInt(prompt("Entrez le nombre à rechercher : "));
let pos = tab.indexOf(rech);

if (pos !== -1) {
  console.log("Trouvé à la position " + (pos + 1));
} else {
  console.log("Pas trouvé");
}