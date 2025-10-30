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
      procurementMethodDetails: { type: Sequelize.STRING },
      procurementMethodRationale: { type: Sequelize.STRING },
      mainProcurementCategory: { type: Sequelize.STRING },
      additionalProcurementCategories: { type: Sequelize.JSON },
      awardCriteria: { type: Sequelize.STRING },
      awardCriteriaDetails: { type: Sequelize.STRING },
      submissionMethod: { type: Sequelize.JSON },
      submissionMethodDetails: { type: Sequelize.STRING },
      tenderPeriod: { type: Sequelize.JSON },
      enquiryPeriod: { type: Sequelize.JSON },
      hasEnquiries: { type: Sequelize.BOOLEAN },
      eligibilityCriteria: { type: Sequelize.STRING },
      awardPeriod: { type: Sequelize.JSON },
      contractPeriod: { type: Sequelize.JSON },
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

    await queryInterface.createTable('Tenderers', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      tenderId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Tenders', key: 'id' },
        onDelete: 'CASCADE'
      },
      name: { type: Sequelize.STRING },
      organizationId: { type: Sequelize.STRING },
      identifier: { type: Sequelize.JSON },             
      additionalIdentifiers: { type: Sequelize.JSON },   
      address: { type: Sequelize.JSON },                
      contactPoint: { type: Sequelize.JSON },            
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });

    await queryInterface.createTable('Amendments', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      parentType: { type: Sequelize.STRING },
      parentId: { type: Sequelize.INTEGER },
      amendmentId: { type: Sequelize.STRING }, 
      description: { type: Sequelize.TEXT },
      rationale: { type: Sequelize.STRING },
      amendsReleaseID: { type: Sequelize.STRING },
      releaseID: { type: Sequelize.STRING },
      date: { type: Sequelize.DATE },
      changes: { type: Sequelize.JSON },
      isCurrent: { type: Sequelize.BOOLEAN, defaultValue: false }, 
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('TenderItems');
    await queryInterface.dropTable('Tenderers');
    await queryInterface.dropTable('Tenders');
    
  }
};