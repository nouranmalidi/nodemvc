const db = require('../models'); 
const User = db.User; 
// Op n'est nécessaire que si tu fais des recherches (Op.like, Op.or, etc.)
const Op = db.Sequelize.Op; 

exports.create = async (req, res) => {
    // 1. Récupération des données
    const emailUser = req.body.email;
    const passwordUser = req.body.psw;

    // 2. Validation des données d'entrée
    if (!emailUser || !passwordUser) {
        res.status(400).send({
            message: "Email et mot de passe sont requis."
        }); 
        
        return res.render('register', { error: "Email et mot de passe sont requis." });
    }

    // 3. Bloc Try/Catch pour la création
    try {
        const user = {
            email: emailUser,
            password: passwordUser
        };

        // On attend que l'utilisateur soit créé en base
        const data = await User.create(user);

        // 4. Succès : Redirection ou réponse JSON
        console.log('Utilisateur créé avec succès !');
        // Si c'est pour ton site web :
        res.redirect('/login'); 
        // Si c'est pour une API (Postman) :
        // res.status(201).json({ message: 'User created successfully', data });

    } catch (error) {
        // 5. Gestion des erreurs
        console.error('Erreur lors de la création :', error);
        
        // On renvoie vers la page d'inscription avec un message d'erreur
        res.status(500).render('register', { 
            error: "Une erreur interne est survenue lors de l'inscription." 
        });
    }
};

// Méthode pour récupérer un utilisateur par son id (utile pour la connexion)
exports.findOne = async (req, res) => {
    // Récupération de l'id de l'utilisateur depuis les paramètres de la requête
    const idUser = req.params.id;
    try {
        // On utilise la méthode findByPk de Sequelize pour trouver l'utilisateur par son id dans la BDD
        const data = await User.findByPk(idUser)
        .then((user) => { // Si je trouve l'utilisateur, je le renvoie en réponse
          if (user) {
            res.send(user);
          } else {
            console.log('Utilisateur non trouvé avec l\'id :', idUser);
            res.status(404).json({ message: "Utilisateur non trouvé." });
          }
        });



    } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur :', error);
        res.status(500).json({ message: "Une erreur interne est survenue lors de la récupération de l'utilisateur avec l'id " + idUser + "." });
    }
};

// Méthode pour récupérer tous les utilisateurs
exports.findAll = (req, res) => {
    User.findAll()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erreur lors de la récupération de tous les utilistateurs."
        });
    });
}