'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Tenders', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      releaseId: { type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      status: { type: Sequelize.STRING },
      procuringEntity: { type: Sequelize.JSON },
      value: { type: Sequelize.JSON },
      minValue: { type: Sequelize.JSON },
      procurementMethod: { type: Sequelize.STRING },
      mainProcurementCategory: { type: Sequelize.STRING },
      submissionMethod: { type: Sequelize.JSON },
      tenderPeriod: { type: Sequelize.JSON },
      enquiryPeriod: { type: Sequelize.JSON },
      numberOfTenderers: { type: Sequelize.INTEGER },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
    await queryInterface.createTable('TenderItems', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      tenderId: { type: Sequelize.INTEGER },
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
    await queryInterface.dropTable('TenderItems');
    await queryInterface.dropTable('Tenders');
  }
};