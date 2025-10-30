'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Awards', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      releaseId: { type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      status: { type: Sequelize.STRING },
      date: { type: Sequelize.DATE },
      value: { type: Sequelize.JSON },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
    await queryInterface.createTable('Suppliers', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      awardId: { type: Sequelize.INTEGER },
      name: { type: Sequelize.STRING },
      identifier: { type: Sequelize.JSON },
      address: { type: Sequelize.JSON },
      contactPoint: { type: Sequelize.JSON },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
     await queryInterface.createTable('AwardsItems', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      awardId: { type: Sequelize.INTEGER },
      description: { type: Sequelize.TEXT },
      classification: { type: Sequelize.JSON },
      additionalClassifications: { type: Sequelize.JSON },
      quantity: { type: Sequelize.INTEGER },
      unit: { type: Sequelize.JSON },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Suppliers');
    await queryInterface.dropTable('Awards');
  }
};