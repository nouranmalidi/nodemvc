/**
 * Le fichier authentificationRoute.js a pour mission de créer 
 * les routes de la page d'authentification.ejs
 */

// J'importe le module express pour créer une application de type express   
const express = require("express");

// J'instancie un routeur de type express
const router = express.Router();

// J'importe le controleur de la page d'authentification pour pouvoir utiliser sa logique dans la route
const authentificationController = require("../controllers/authentificationController"); // J'importe
//  le controleur de la page d'authentification pour pouvoir utiliser sa logique dans la route

// Maintenant je trace ma route en utilisant le routeur

// La route de la page d'authentification, si on met register dans app.js c'est pas la peine de la mettre ici.
router.get("/register", authentificationController.registerView); // Je trace la route de la page d'authentification en utilisant la méthode get du routeur


module.exports = router; // J'exporte le routeur pour pouvoir l'utiliser dans le fichier app.js