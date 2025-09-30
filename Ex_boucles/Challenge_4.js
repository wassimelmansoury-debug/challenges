const prompt = require('prompt-sync')();
let num = prompt("Entrez un entier :")
let revnumber = num.toString().split('').reverse().join('');
console.log(revnumber);