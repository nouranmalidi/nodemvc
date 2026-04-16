/**
 * Le fichier authentificationController.js est un controleur
 * Dans ce fichier je vais créer la logique de la page d'authentification.ejs
 */

module.exports = {
    // la vue register 
    registerView: (req, res) => {
        res.render('register');
    }
};