/**
 * Le fichier app.js est une application de type expressjs
 */

// J'importe le module express pour créer une application de type express
const express = require("express");



// J'importe la route accueilRoute.js
const accueilRoute = require("./routes/accueilRoute");


// J'importe la route authentificationRoute.js
const authRoute = require("./routes/authentificationRoute");


// J'initie une application de type express
const app = express(); // J'instancie une application de type express


// Je configure le dossier des vues pour pouvoir utiliser les fichiers .ejs dans mon projet
app.set("views", "./views"); // Je configure le dossier des vues pour pouvoir utiliser les fichiers .ejs dans mon projet

// Je configure le moteur de template ejs pour pouvoir utiliser les fichiers .ejs dans mon projet
app.set("view engine", "ejs"); // Je configure le moteur de template ejs pour pouvoir utiliser les fichiers .ejs dans mon projet



// J'utilise la route accueilRoute.js dans mon application express
app.use("/", accueilRoute); // Je dis à mon application d'utiliser la route accueilRoute pour toutes les requêtes qui commencent par "/"    


app.use("/", authRoute); // Je dis à mon application d'utiliser la route authRoute pour toutes les requêtes qui commencent par "/"






module.exports = app; // J'exporte l'application pour pouvoir l'utiliser dans le fichier myserver.js