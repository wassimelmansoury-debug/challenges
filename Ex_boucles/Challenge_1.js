const prompt = require("prompt-sync")();

let numero = prompt("Entrer un numero : ");
for(let i = 1 ; i <=10 ; i++){
    console.log(numero ,'*',i,"=",i*numero);
}