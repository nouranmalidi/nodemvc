// J'importe le module express pour créer une application de type express
const express = require("express");


const router = express.Router(); // J'instancie un routeur de type express


const accueilController = require("../controllers/accueilController"); // J'importe le controleur de la page d'accueil pour pouvoir utiliser sa logique dans la route



// Maintenent je trace ma route en utilisant le routeur

// La route de la page d'accueil
router.get("/",accueilController.accueilView ); // Je trace la route de la page d'accueil en utilisant la méthode get du routeur


module.exports = router; // J'exporte le routeur pour pouvoir l'utiliser dans le fichier app.js