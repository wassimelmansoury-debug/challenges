const prompt = require('prompt-sync')();
let array = [];
for (let i=0 ;i< 5;(i++)){
array.push(Number(prompt("entre le numero :")));
}
console.log(array.reverse());