'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Contracts', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      releaseId: { type: Sequelize.INTEGER },
      awardId: { type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      status: { type: Sequelize.STRING },
      period: { type: Sequelize.JSON },
      value: { type: Sequelize.JSON },
      dateSigned: { type: Sequelize.DATE },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
    await queryInterface.createTable('Implementations', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      contractId: { type: Sequelize.INTEGER },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
    await queryInterface.createTable('Transactions', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      implementationId: { type: Sequelize.INTEGER },
      source: { type: Sequelize.STRING },
      date: { type: Sequelize.DATE },
      value: { type: Sequelize.JSON },
      payer: { type: Sequelize.JSON },
      payee: { type: Sequelize.JSON },
      uri: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });

    await queryInterface.createTable('ContractsItems', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      contractId: { type: Sequelize.INTEGER },
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
    await queryInterface.dropTable('Transactions');
    await queryInterface.dropTable('Implementations');
    await queryInterface.dropTable('ContractsItems');
    await queryInterface.dropTable('Contracts');
  }
};