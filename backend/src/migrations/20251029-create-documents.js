'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('documents', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      parentType: { type: Sequelize.STRING },
      parentId: { type: Sequelize.INTEGER },
      documentType: { type: Sequelize.STRING },
      title: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      url: { type: Sequelize.STRING },
      datePublished: { type: Sequelize.DATE },
      dateModified: { type: Sequelize.DATE },
      format: { type: Sequelize.STRING },
      language: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('documents');
  }
};
