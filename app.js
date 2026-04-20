/**
 * Le fichier app.js est une application de type expressjs
 */

// J'importe le module express pour créer une application de type express
const express = require("express");


// J'initie une application de type express
const app = express(); // J'instancie une application de type express


// J'importe MySQL2 pour pouvoir se connecter à la base de données MySQL
const mysql2 = require("mysql2");


// J'importe le pilote express-myconnexion utilisé pour se connecter à la BDD
const myConnection = require('express-myconnection');


// Pour lire le JSON (si tu envoies du JSON via Postman ou un Fetch)
app.use(express.json()); 

// Pour lire les données d'un formulaire standard (URL-encoded)
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public")); // Je configure le dossier public pour pouvoir utiliser les fichiers CSS et les images dans mon projet

const optionsConnectionBaseDeDonnees = {
  host: "localhost",
  user: "root",
  password: "Sardines123@",
  database: "maygourmet",
  port: "3306" // Port par défaut de MySQL
};

// Middleware pour se connecter à la BDD MySQL, "pool" est une stratégie de connection à la BDD MySQL
app.use(myConnection(mysql2, optionsConnectionBaseDeDonnees, "pool"));






// J'importe la route accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");


// J'importe la route authentificationRoute.js
const authRoute = require("./routes/authentificationRoute");





// Je configure le dossier des vues pour pouvoir utiliser les fichiers .ejs dans mon projet
app.set("views", "./views"); // Je configure le dossier des vues pour pouvoir utiliser les fichiers .ejs dans mon projet

// Je configure le moteur de template ejs pour pouvoir utiliser les fichiers .ejs dans mon projet
app.set("view engine", "ejs"); // Je configure le moteur de template ejs pour pouvoir utiliser les fichiers .ejs dans mon projet





// J'utilise la route accueilRoute.js dans mon application express
app.use("/", accueilRoute); // Je dis à mon application d'utiliser la route accueilRoute pour toutes les requêtes qui commencent par "/"    


app.use("/", authRoute); // Je dis à mon application d'utiliser la route authRoute pour toutes les requêtes qui commencent par "/"






module.exports = app; // J'exporte l'application pour pouvoir l'utiliser dans le fichier myserver.js