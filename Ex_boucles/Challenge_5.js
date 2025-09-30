const prompt = require('prompt-sync')();
let num = prompt("Entrez un numero : ");
for (let i = 2 ; i <= num ; i++){
    let isPremier = true
    for(let j = 2 ; j < i ;j++){
        if(i % j == 0) isPremier = false
    }
    if(isPremier) console.log(i);
}