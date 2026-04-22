/**
 * Le fichier authentificationRoute.js a pour mission de créer 
 * les routes de la page d'authentification.ejs
 */

// J'importe le module express pour créer une application de type express   
const express = require("express");

// J'instancie un routeur de type express
const router = express.Router();

// J'importe le controleur de la page userController
const userController = require("../controllers/userController");


const usersController = require("../controllers/userController")

// J'importe le controleur de la page d'authentification pour pouvoir utiliser sa logique dans la route
const authentificationController = require("../controllers/authentificationController"); // J'importe
//  le controleur de la page d'authentification pour pouvoir utiliser sa logique dans la route

// Maintenant je trace ma route en utilisant le routeur

// La route de la page d'authentification, si on met register dans app.js c'est pas la peine de la mettre ici.
router.get("/register", authentificationController.registerView); // Je trace la route de la page d'authentification en utilisant la méthode get du routeur

// La route pour récupérer un utilisateur par son id, si on met users dans app.js c'est pas la peine de la mettre ici.
router.get("/users/:id", userController.findOne); // Je trace la route pour récupérer un utilisateur par son id en utilisant la méthode get du routeur et en passant l'id de l'utilisateur dans les paramètres de la route


// La route pour récupérer tous les utilisateurs
router.get("/users", usersController.findAll);



// La route pour créer un utilisateur, si on met users dans app.js c'est pas la peine de la mettre ici.
router.post("/register", authentificationController.registerUser); // Je trace la route de la page d'authentification en utilisant la méthode post du routeur pour pouvoir envoyer les données du formulaire d'inscription à la base de données MySQL

module.exports = router; // J'exporte le routeur pour pouvoir l'utiliser dans le fichier app.js