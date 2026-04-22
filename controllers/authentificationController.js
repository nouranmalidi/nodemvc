// 1. N'oublie pas d'importer ton modèle tout en haut du fichier !
const User = require('../models/User'); 

module.exports = {
    registerView: (req, res) => {
        res.render('register');
    },

    registerUser: async (req, res) => {
        const emailUser = req.body.email;
        const passwordUser = req.body.psw; 

        if (!emailUser || !passwordUser) {
           return res.render('register', { error: "Email et mot de passe sont requis." });
        }

        try {
            // 2. LA MAGIE SEQUELIZE :Au lieu connection.query j'utilies la méthode 
            // create du modèle User pour créer un nouvel utilisateur dans la base de données MySQL
            await User.create({
                email: emailUser,
                password: passwordUser
            });

            console.log("✅ Utilisateur inscrit avec succès grâce à Sequelize !");
            res.redirect('/');

        } catch (error) {
            console.error("❌ Erreur lors de la création :", error);
            res.render('register', { error: "Erreur lors de l'inscription." });
        }
    }
};