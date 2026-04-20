/**
 * Ce fichier définit le modèle Sequelize pour la table "users" de la base de données MySQL.
 *  User.js est une classe qui représente un utilisateur dans notre application. 
 * Elle contient les propriétés et les méthodes liées à un utilisateur, 
 * ainsi que la configuration de la table "users" dans la base de données MySQL.
 * Le modèle User est de : id, email et password  
 */

const DataTypes = require('sequelize'); // J'importe les types de données de Sequelize pour définir les types des champs de la table


const sequelize = require('../db'); // J'importe l'instance de Sequelize pour pouvoir définir le modèle User en utilisant cette instance 

module.exports = sequelize.define('User', { // Je définis le modèle User en utilisant la méthode define de Sequelize
  id: {
    type: DataTypes.INTEGER, // Le champ "id" est de type entier
    primaryKey: true, // Le champ "id" est une clé primaire
    autoIncrement: true // Le champ "id" est auto-incrémenté
  },
  email: {
    type: DataTypes.STRING, // Le champ "email" est de type chaîne de caractères
    unique: true, // Le champ "email" doit être unique
    allowNull: false // Le champ "email" ne peut pas être null
  },
  password: {
    type: DataTypes.STRING, // Le champ "password" est de type chaîne de caractères
    allowNull: false // Le champ "password" ne peut pas être null
  }
});