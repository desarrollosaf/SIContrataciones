'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Plannings', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      releaseId: { type: Sequelize.INTEGER },
      rationale: { type: Sequelize.TEXT },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
    await queryInterface.createTable('Budgets', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      planningId: { type: Sequelize.INTEGER },
      description: { type: Sequelize.STRING },
      amount: { type: Sequelize.FLOAT },
      currency: { type: Sequelize.STRING },
      project: { type: Sequelize.STRING },
      projectID: { type: Sequelize.STRING },
      uri: { type: Sequelize.STRING },
      source: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Budgets');
    await queryInterface.dropTable('Plannings');
  }
};