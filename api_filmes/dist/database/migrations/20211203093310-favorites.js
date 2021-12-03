"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('favorites', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Year: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ImdbID: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    Poster: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('favorites'),
};
