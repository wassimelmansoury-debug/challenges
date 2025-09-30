const prompt = require("prompt-sync")(); 

let history = [];

while(true){
    let numb_1 = Number(prompt("Entrez le premier nombre: "));
    let numb_2 = Number(prompt("Entrez le deuxième nombre: "));

    console.log("\nChoisir l'opération :");
    console.log("1 => Addition");
    console.log("2 => Soustraction");
    console.log("3 => Multiplication");
    console.log("4 => Division");
    console.log("5 => Puissance");
    console.log("6 => Racine carrée");
    console.log("7 => Factorielle");
    console.log("8 => Historique");
    console.log("0 => Quitter");

    let operation = Number(prompt("Votre choix: "));
    let resultat;

    switch(operation){
        case 0:
            console.log("Au revoir !");
            process.exit();
        case 1:
            resultat = numb_1 + numb_2;
            console.log("=", resultat);
            history.push("{numb_1} + {numb_2} = $${resultat}");
            break;
        case 2:
            resultat = numb_1 - numb_2;
            console.log("=", resultat);
            history.push("{numb_1} - {numb_2} = {resultat}");
            break;
        case 3:
            resultat = numb_1 * numb_2;
            console.log("=", resultat);
            history.push("{numb_1} * {numb_2} = {resultat}");
            break;
        case 4:
            if(numb_2 === 0){
                console.log("Erreur : division par zéro");
            } else {
                resultat = numb_1 / numb_2;
                console.log("=", resultat);
                history.push("{numb_1} / {numb_2} = {resultat}");
            }
        }
    }
