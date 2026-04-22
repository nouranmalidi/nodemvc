/**
 * Ce fichier définit le modèle Sequelize pour la table "users" de la base de données MySQL.
 *  User.js est une classe qui représente un utilisateur dans notre application. 
 * Elle contient les propriétés et les méthodes liées à un utilisateur, 
 * ainsi que la configuration de la table "users" dans la base de données MySQL.
 * Le modèle User est de : id, email et password  
 */

const {DataTypes}  = require('sequelize'); // J'importe les types de données de Sequelize pour définir les types des champs de la table


const sequelize = require('../db'); // J'importe l'instance de Sequelize pour pouvoir définir le modèle User en utilisant cette instance 

// models/User.js

module.exports = (sequelize, DataTypes) => {
  // On définit le modèle à l'intérieur de cette fonction
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Options optionnelles (ex: nom de la table)
    tableName: 'users'
  });

  return User; // TRÈS IMPORTANT : On retourne le modèle
};


