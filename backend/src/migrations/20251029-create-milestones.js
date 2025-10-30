'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('milestones', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      parentType: { type: Sequelize.STRING },
      parentId: { type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING },
      type: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      code: { type: Sequelize.STRING },
      dueDate: { type: Sequelize.DATE },
      dateMet: { type: Sequelize.DATE },
      dateModified: { type: Sequelize.DATE },
      status: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('milestones');
  }
};
