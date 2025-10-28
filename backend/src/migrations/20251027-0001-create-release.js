'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Releases', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      ocid: { type: Sequelize.STRING },
      cycle: { type: Sequelize.INTEGER },
      language: { type: Sequelize.STRING },
      date: { type: Sequelize.DATE },
      initiationType: { type: Sequelize.STRING },
      tag: { type: Sequelize.JSON },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Releases');
  }
};