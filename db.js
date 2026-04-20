/**
 * Permet à Sequelize de se connecterà la BDD
 */

const { Sequelize } = require('sequelize'); // J'importe la classe Sequelize pour créer une instance de connexion à la base de données

// Je crée une instance de Sequelize en fournissant les informations de connexion à la base de données MySQL
const sequelize = new Sequelize('maygourmet', 'root', 'Sardines123@', {
  host: 'localhost', // L'hôte de la base de données (généralement localhost pour le développement local)
  dialect: 'mysql', // Le type de base de données que nous utilisons (MySQL dans ce cas)
  logging: false    // Optionnel : évite de polluer la console avec les requêtes SQL
});

module.exports = sequelize; // J'exporte l'instance de Sequelize pour pouvoir l'utiliser dans d'autres fichiers de mon application