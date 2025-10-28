'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Buyers', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      releaseId: { type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING },
      idOrg: { type: Sequelize.STRING },
      identifier: { type: Sequelize.JSON },
      additionalIdentifiers: { type: Sequelize.JSON },
      address: { type: Sequelize.JSON },
      contactPoint: { type: Sequelize.JSON },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Buyers');
  }
};