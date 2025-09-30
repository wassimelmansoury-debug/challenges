const prompt = require('prompt-sync')();
let  tableau = [];
for(let i=0; i < 3; i++){
    tableau.push((prompt("entrez le nom :")));   
}
let rech=prompt("entrez le nom chercher :")
let pos = tableau.indexOf(rech);
if(pos !=-1){
    console.log(rech," existe dans le tabeau a l'index :" ,pos);
}else{
    console.log(rech,"n'exist pas");
    
}

