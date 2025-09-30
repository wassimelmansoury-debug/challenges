const prompt = require("prompt-sync")();

let somme = 0;
let max = -Infinity;
let num;
do{
    num = parseFloat(prompt("entre un nombre : "));
    if(num < 100 && num > 0){
        somme += num;
        if(num > max){
            max = num
        }
    }
    console.log(num);
    
}while(num !== 0);
console.log("somme :" ,somme);
console.log("max : " ,max);


