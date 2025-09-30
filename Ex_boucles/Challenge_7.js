const prompt = require('prompt-sync')()
let somme = 0;
for(let i = 0 ; i < 10 ; i++){
    let num = parseFloat(prompt("Entrez un numero : "));
    if(num >= 0){
        somme += num
    }
}
console.log("La somme est :",somme); 
