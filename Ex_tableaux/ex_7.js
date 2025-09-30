const prompt=require('prompt-sync')();
let tableau=[];
let vey=0;
for(let i=0; i < tableau.length; i++){
    tableau.push((prompt("entrez le nom :")));
}if ((voyelles=="a")||(voyelles=="e")||(voyelles=="i")||(voyelles=="u")||(voyelles=="o")||(voyelles=="y")){
    console.log("les voyelles :")  
}else {
    console.log("pas de voyelles");
}


