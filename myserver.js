/**
 * Le fichier myserver.js a pour mission de créer le serveur de l'application
 */

const http = require('http') // C'est http qui va créer un serveur

// J'importe l'application express app.js qui nous permet de créer les routes
const app = require('./app');

// Création du serveur en utilisant express (app) en paramètre de la fonction createServer
const serveur = http.createServer(app);


// Stockage du port en dur pour éviter la saisie en dur
const numeroPort = 3001;





serveur.listen(numeroPort, ()=> {
    console.log("Le serveur de NodeMVS est à l'écoute sur le port", numeroPort);
});