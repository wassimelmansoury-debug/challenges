const prompt=require ("prompt-sync")();
const utilisateur="wassime";
const mot_de_pass="12345";

let admin = prompt(("Nom d'utilisateur :"));
let password = prompt("mot de passe :");
if (admin===utilisateur){
    if (password===mot_de_pass){
    Console.log("Bienvenue Admin")
         }else {
    console.log("mote de passe incorrect")
    }else 