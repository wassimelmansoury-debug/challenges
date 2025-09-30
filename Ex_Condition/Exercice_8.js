const prompt = require ("prompt-sync")();
let colore =prompt("Feu tricolore:")
switch(colore){
    case "rouge":
        console.log("Arrêt");
        break;
    case "jaune":
        console.log("Préparez-vous");
        break;
    case "vert":
        console.log("Allez");
        break;
    default:
        console.log("invalide");
}
