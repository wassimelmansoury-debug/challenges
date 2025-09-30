const prompt=require("prompt-sync")();
let tableau =[1,2,3,4];
let tableau_carre=[];
tableau_carre=(tableau.map((element) => element * element));
console.log(tableau_carre);
