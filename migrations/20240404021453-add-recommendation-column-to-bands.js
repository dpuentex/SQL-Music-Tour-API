"use strict";

/** @type {import('sequelize-cli').Migration} */
const { DataTypes } = require("sequelize");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("bands", "recommendation", {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("bands", "recommendation");
  },
};
