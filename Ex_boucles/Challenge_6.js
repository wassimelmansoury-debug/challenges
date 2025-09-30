const prompt = require('prompt-sync')();
let base = prompt("Entez la base : ");
let exposant = prompt("entrez l'exposant : ");
let puissance = base;
if(base > 0 && exposant >= 0 ){
    let i = 1;
    while(i < exposant){
        i++
        puissance *= base
    }
    console.log("la puissance de ",base,":",puissance);
}else{
    console.log("entrez une base > 0 et un exposant >= 0");
}
