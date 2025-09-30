const prompt = require('prompt-sync')();
let tab = [];
for (let i = 0; i < 7; i++) {
  tab.push((prompt("Entrez un nombre : ")));
}

let min = Math.min(...tab);
let max = Math.max(...tab);

console.log("Min = " + min + ", Max = " + max);