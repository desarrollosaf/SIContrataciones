'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    const releases = [];
    for (let i=0;i<10;i++){
      releases.push({
        ocid: faker.string.uuid(),
        cycle: faker.number.int({ min:2015, max:2025 }),
        language: 'es',
        date: faker.date.past(),
        initiationType: 'tender',
        tag: JSON.stringify(['planning']),
        createdAt: now,
        updatedAt: now
      });
    }
    await queryInterface.bulkInsert('Releases', releases);

    // insert related tables assuming release ids 1..10 (empty DB)
    const metadata = [];
    const publishers = [];
    const parties = [];
    const buyers = [];
    const plannings = [];
    const budgets = [];
    const tenders = [];
    const tenderItems = [];
    const awards = [];
    const suppliers = [];
    const contracts = [];
    const implementations = [];
    const transactions = [];

    for (let i=1;i<=10;i++){
      metadata.push({
        releaseId: i,
        actualizacion: faker.date.recent(),
        institucion: faker.company.name(),
        contacto: faker.internet.email(),
        personaContacto: faker.person.fullName(),
        createdAt: now,
        updatedAt: now
      });
      publishers.push({
        releaseId: i,
        name: faker.company.name(),
        scheme: faker.string.alpha(5),
        uid: faker.string.uuid(),
        uri: faker.internet.url(),
        createdAt: now,
        updatedAt: now
      });
      parties.push({
        releaseId: i,
        name: faker.company.name(),
        partyId: faker.string.uuid(),
        identifier: JSON.stringify({ scheme: 'ID', id: faker.string.uuid(), legalName: faker.company.name(), uri: faker.internet.url() }),
        additionalIdentifiers: JSON.stringify([]),
        address: JSON.stringify({ streetAddress: faker.location.streetAddress(), locality: faker.location.city(), region: faker.location.state(), postalCode: faker.location.zipCode(), countryName: faker.location.country() }),
        contactPoint: JSON.stringify({ name: faker.person.fullName(), email: faker.internet.email(), telephone: faker.phone.number(), faxNumber: '', url: faker.internet.url() }),
        roles: JSON.stringify(['buyer']),
        details: JSON.stringify({ scale: 'micro' }),
        createdAt: now,
        updatedAt: now
      });
      buyers.push({
        releaseId: i,
        name: faker.company.name(),
        idOrg: faker.string.uuid(),
        identifier: JSON.stringify({ scheme: 'ID', id: faker.string.uuid(), legalName: faker.company.name(), uri: faker.internet.url() }),
        additionalIdentifiers: JSON.stringify([]),
        address: JSON.stringify({ streetAddress: faker.location.streetAddress(), locality: faker.location.city(), region: faker.location.state(), postalCode: faker.location.zipCode(), countryName: faker.location.country() }),
        contactPoint: JSON.stringify({ name: faker.person.fullName(), email: faker.internet.email(), telephone: faker.phone.number(), faxNumber: '', url: faker.internet.url() }),
        createdAt: now,
        updatedAt: now
      });
      plannings.push({
        releaseId: i,
        rationale: faker.lorem.sentence(),
        createdAt: now,
        updatedAt: now
      });
      budgets.push({
        planningId: i,
        description: 'Fuente del presupuesto',
        amount: faker.number.float({ min:10000, max:500000 }),
        currency: 'MXN',
        project: faker.lorem.words(3),
        projectID: faker.string.uuid(),
        uri: faker.internet.url(),
        source: faker.internet.url(),
        createdAt: now,
        updatedAt: now
      });
      tenders.push({
        releaseId: i,
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        status: 'planning',
        procuringEntity: JSON.stringify({ name: faker.company.name(), id: faker.string.uuid() }),
        value: JSON.stringify({ amount: faker.number.float({min:10000, max:500000}), currency: 'MXN' }),
        minValue: JSON.stringify({ amount: faker.number.float({min:1000, max:9000}), currency: 'MXN' }),
        procurementMethod: 'open',
        mainProcurementCategory: 'goods',
        submissionMethod: JSON.stringify(['electronicSubmission']),
        tenderPeriod: JSON.stringify({ startDate: new Date(), endDate: new Date(), durationInDays: 10 }),
        enquiryPeriod: JSON.stringify({ startDate: new Date(), endDate: new Date(), durationInDays: 10 }),
        numberOfTenderers: faker.number.int({ min:1, max:50 }),
        createdAt: now,
        updatedAt: now
      });
      tenderItems.push({
        tenderId: i,
        description: faker.commerce.productDescription(),
        classification: JSON.stringify({ scheme: 'CPV', id: 'ID', description: 'Descripción' }),
        additionalClassifications: JSON.stringify([]),
        quantity: faker.number.int({ min:1, max:100 }),
        unit: JSON.stringify({ scheme: 'UNCEFACT', id: 'ID', name: 'unit', value: { amount: faker.number.int({min:1,max:100}), currency: 'MXN' } }),
        createdAt: now,
        updatedAt: now
      });
      awards.push({
        releaseId: i,
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        status: 'pending',
        date: faker.date.past(),
        value: JSON.stringify({ amount: faker.number.float({min:10000, max:500000}), currency: 'MXN' }),
        createdAt: now,
        updatedAt: now
      });
      suppliers.push({
        awardId: i,
        name: faker.company.name(),
        identifier: JSON.stringify({ scheme: 'ID', id: faker.string.uuid(), legalName: faker.company.name(), uri: faker.internet.url() }),
        address: JSON.stringify({ streetAddress: faker.location.streetAddress(), locality: faker.location.city(), region: faker.location.state(), postalCode: faker.location.zipCode(), countryName: faker.location.country() }),
        contactPoint: JSON.stringify({ name: faker.person.fullName(), email: faker.internet.email(), telephone: faker.phone.number(), faxNumber: '', url: faker.internet.url() }),
        createdAt: now,
        updatedAt: now
      });
      contracts.push({
        releaseId: i,
        awardId: i,
        title: faker.company.catchPhrase(),
        description: faker.lorem.sentence(),
        status: 'pending',
        period: JSON.stringify({ startDate: new Date(), endDate: new Date(), durationInDays: 30 }),
        value: JSON.stringify({ amount: faker.number.float({min:10000, max:500000}), currency: 'MXN' }),
        dateSigned: faker.date.recent(),
        createdAt: now,
        updatedAt: now
      });
      implementations.push({
        contractId: i,
        createdAt: now,
        updatedAt: now
      });
      transactions.push({
        implementationId: i,
        source: 'system',
        date: faker.date.recent(),
        value: JSON.stringify({ amount: faker.number.float({min:1000, max:50000}), currency: 'MXN' }),
        payer: JSON.stringify({ name: faker.company.name() }),
        payee: JSON.stringify({ name: faker.company.name() }),
        uri: faker.internet.url(),
        createdAt: now,
        updatedAt: now
      });
    }

    await queryInterface.bulkInsert('Metadata', metadata);
    await queryInterface.bulkInsert('Publishers', publishers);
    await queryInterface.bulkInsert('Parties', parties);
    await queryInterface.bulkInsert('Buyers', buyers);
    await queryInterface.bulkInsert('Plannings', plannings);
    await queryInterface.bulkInsert('Budgets', budgets);
    await queryInterface.bulkInsert('Tenders', tenders);
    await queryInterface.bulkInsert('TenderItems', tenderItems);
    await queryInterface.bulkInsert('Awards', awards);
    await queryInterface.bulkInsert('Suppliers', suppliers);
    await queryInterface.bulkInsert('Contracts', contracts);
    await queryInterface.bulkInsert('Implementations', implementations);
    await queryInterface.bulkInsert('Transactions', transactions);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
    await queryInterface.bulkDelete('Implementations', null, {});
    await queryInterface.bulkDelete('Contracts', null, {});
    await queryInterface.bulkDelete('Suppliers', null, {});
    await queryInterface.bulkDelete('Awards', null, {});
    await queryInterface.bulkDelete('TenderItems', null, {});
    await queryInterface.bulkDelete('Tenders', null, {});
    await queryInterface.bulkDelete('Budgets', null, {});
    await queryInterface.bulkDelete('Plannings', null, {});
    await queryInterface.bulkDelete('Buyers', null, {});
    await queryInterface.bulkDelete('Parties', null, {});
    await queryInterface.bulkDelete('Publishers', null, {});
    await queryInterface.bulkDelete('Metadata', null, {});
    await queryInterface.bulkDelete('Releases', null, {});
  }
};