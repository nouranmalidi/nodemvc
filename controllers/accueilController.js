/**
 * Ce fichier est un controleur
 * Dans ce fichier je vais créer la logique de la page d'accueil.ejs
 */

module.exports = {
    // La fonction qui va gérer la logique de la page d'accueil.ejs
    accueilView: (req, res) => {
        res.render('accueil'); // Je rend la page d'accueil
    }
}


