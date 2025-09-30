const prompt = require("prompt-sync")();
let tableau = [];

let somme ;
let moyenn;
for (let i = 0; i < 10; i++) {
    tableau.push(parseInt(prompt("entre le numero :")));
}
somme=tableau.reduce((Element,somme)=>somme+=Element,0);
moyenn=somme/tableau.length;
console.log("somme :",somme);
console.log("moyenn :",moyenn)
