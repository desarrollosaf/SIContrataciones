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

    const metadata = [];
    const publishers = [];
    const parties = [];
    const buyers = [];
    const plannings = [];
    const budgets = [];
    const tenders = [];
    const tenderItems = [];
    const tenderers = [];
    const amendments = [];
    const awards = [];
    const suppliers = [];
    const contracts = [];
    const implementations = [];
    const transactions = [];
    const awardsItems = [];
    const contractsItems = [];

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
        amount: JSON.stringify({ amount: faker.number.float({ min:10000, max:500000 }), currency: 'MXN' }),
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
        procuringEntity: JSON.stringify({
          id: faker.string.uuid(),
          name: faker.company.name(),
          identifier: {
            scheme: 'RFC',
            id: faker.string.alphanumeric(8),
            legalName: faker.company.name(),
            uri: faker.internet.url(),
          },
          additionalIdentifiers: [
            {
              scheme: 'CURP',
              id: faker.string.alphanumeric(10),
              legalName: faker.company.name(),
              uri: faker.internet.url(),
            }
          ],
          address: {
            streetAddress: faker.location.streetAddress(),
            locality: faker.location.city(),
            region: faker.location.state(),
            postalCode: faker.location.zipCode(),
            countryName: faker.location.country(),
          },
          contactPoint: {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            telephone: faker.phone.number(),
            faxNumber: faker.phone.number(),
            url: faker.internet.url(),
          },
        }),
        value: JSON.stringify({ amount: faker.number.float({min:10000, max:500000}), currency: 'MXN' }),
        minValue: JSON.stringify({ amount: faker.number.float({min:1000, max:9000}), currency: 'MXN' }),
        procurementMethod: 'open',
        procurementMethodDetails: faker.string.alphanumeric(8),
        procurementMethodRationale: faker.string.alphanumeric(8),
        mainProcurementCategory: 'goods',
        additionalProcurementCategories: JSON.stringify([
            'goods',
          
        ]),
        awardCriteria: faker.string.alphanumeric(8),
        awardCriteriaDetails: faker.string.alphanumeric(8),
        submissionMethod: JSON.stringify([
            'electronicSubmission',
          
        ]),
        submissionMethodDetails: faker.string.alphanumeric(8),
        mainProcurementCategory: 'goods',
        submissionMethod: JSON.stringify(['electronicSubmission']),
        tenderPeriod: JSON.stringify({ startDate: new Date(), endDate: new Date(),  maxExtentDate: new Date(), durationInDays: 10 }),
        enquiryPeriod: JSON.stringify({ startDate: new Date(), endDate: new Date(),  maxExtentDate: new Date(), durationInDays: 10 }),
        hasEnquiries: faker.datatype.boolean(),
        eligibilityCriteria: faker.string.alphanumeric(8),
        awardPeriod: JSON.stringify({ startDate: new Date(), endDate: new Date(),  maxExtentDate: new Date(), durationInDays: 10 }),
        contractPeriod: JSON.stringify({ startDate: new Date(), endDate: new Date(),  maxExtentDate: new Date(), durationInDays: 10 }),
        numberOfTenderers: faker.number.int({ min:1, max:50 }),
        createdAt: now,
        updatedAt: now
      });
      tenderItems.push({
        tenderId: i,
        description: faker.commerce.productDescription(),
        classification: JSON.stringify({ scheme: 'CPV', id: 'ID', description: 'Descripción', uri: 'https://' }),
        additionalClassifications: JSON.stringify({ scheme: 'CPV', id: 'ID', description: 'Descripción', uri: 'https://' }),
        quantity: faker.number.int({ min:1, max:100 }),
        unit: JSON.stringify({ scheme: 'UNCEFACT', id: 'ID', name: 'unit', value: { amount: faker.number.int({min:1,max:100}), currency: 'MXN' }, uri: 'https://' }),
        createdAt: now,
        updatedAt: now
      });

      tenderers.push({
        tenderId: i,
        name: faker.company.name(),
        identifier: JSON.stringify({
          scheme: 'RFC',
          id: faker.string.alphanumeric(8),
          legalName: faker.company.name(),
          uri: faker.internet.url(),
        }),
        additionalIdentifiers: JSON.stringify([
          {
            scheme: 'CURP',
            id: faker.string.alphanumeric(10),
            legalName: faker.company.name(),
            uri: faker.internet.url(),
          }
        ]),
        address: JSON.stringify({
          streetAddress: faker.location.streetAddress(),
          locality: faker.location.city(),
          region: faker.location.state(),
          postalCode: faker.location.zipCode(),
          countryName: faker.location.country(),
        }),
        contactPoint: JSON.stringify({
          name: faker.person.fullName(),
          email: faker.internet.email(),
          telephone: faker.phone.number(),
          faxNumber: faker.phone.number(),
          url: faker.internet.url(),
        }),
        createdAt: now,
        updatedAt: now
      });

          

      awards.push({
        releaseId: i,
        title: faker.lorem.words(3),
        description: faker.lorem.sentence(),
        status: 'pending',
        date: faker.date.past(),
        contractPeriod: JSON.stringify({ startDate: new Date(), endDate: new Date(),  maxExtentDate: new Date(), durationInDays: 10 }),
        value: JSON.stringify({ amount: faker.number.float({min:10000, max:500000}), currency: 'MXN' }),
        createdAt: now,
        updatedAt: now
      });
      
      suppliers.push({
        awardId: i,
        name: faker.company.name(),
        identifier: JSON.stringify({ scheme: 'ID', id: faker.string.uuid(), legalName: faker.company.name(), uri: faker.internet.url() }),
        additionalIdentifiers: JSON.stringify({ scheme: 'ID', id: faker.string.uuid(), legalName: faker.company.name(), uri: faker.internet.url() }),
        address: JSON.stringify({ streetAddress: faker.location.streetAddress(), locality: faker.location.city(), region: faker.location.state(), postalCode: faker.location.zipCode(), countryName: faker.location.country() }),
        contactPoint: JSON.stringify({ name: faker.person.fullName(), email: faker.internet.email(), telephone: faker.phone.number(), faxNumber: '', url: faker.internet.url() }),
        createdAt: now,
        updatedAt: now
      });

      awardsItems.push({
        awardId: i,
        description: faker.commerce.productDescription(),
        classification: JSON.stringify({ scheme: 'CPV', id: 'ID', description: 'Descripción', uri: 'https://' }),
        additionalClassifications: JSON.stringify({ scheme: 'CPV', id: 'ID', description: 'Descripción', uri: 'https://' }),
        quantity: faker.number.int({ min:1, max:100 }),
        unit: JSON.stringify({ scheme: 'UNCEFACT', id: 'ID', name: 'unit', value: { amount: faker.number.int({min:1,max:100}), currency: 'MXN' }, uri: 'https://' }),
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
        relatedProcesses: JSON.stringify([
          {
            id: faker.string.uuid(),
            relationship: [faker.helpers.arrayElement(['framework', 'parent', 'preceding', 'subcontract'])],
            title: faker.lorem.sentence(3),
            scheme: 'ocid',
            identifier: faker.string.alphanumeric(10),
            uri: faker.internet.url()
          }
        ]),
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
        payer: JSON.stringify({
          name: faker.company.name(),
          id: faker.string.uuid(),
          identifier: {
            scheme: faker.helpers.arrayElement(['RFC', 'NIT', 'VAT', 'RUC']),
            id: faker.string.alphanumeric(10),
            legalName: faker.company.name(),
            uri: faker.internet.url()
          },
          additionalIdentifiers: [
            {
              scheme: faker.helpers.arrayElement(['RFC', 'NIT', 'VAT', 'RUC']),
              id: faker.string.alphanumeric(10),
              legalName: faker.company.name(),
              uri: faker.internet.url()
            }
          ],
          address: {
            streetAddress: faker.location.streetAddress(),
            locality: faker.location.city(),
            region: faker.location.state(),
            postalCode: faker.location.zipCode(),
            countryName: faker.location.country()
          },
          contactPoint: {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            telephone: faker.phone.number(),
            faxNumber: faker.phone.number(),
            url: faker.internet.url()
          }
        }),
        payee: JSON.stringify({
          name: faker.company.name(),
          id: faker.string.uuid(),
          identifier: {
            scheme: faker.helpers.arrayElement(['RFC', 'NIT', 'VAT', 'RUC']),
            id: faker.string.alphanumeric(10),
            legalName: faker.company.name(),
            uri: faker.internet.url()
          },
          additionalIdentifiers: [
            {
              scheme: faker.helpers.arrayElement(['RFC', 'NIT', 'VAT', 'RUC']),
              id: faker.string.alphanumeric(10),
              legalName: faker.company.name(),
              uri: faker.internet.url()
            }
          ],
          address: {
            streetAddress: faker.location.streetAddress(),
            locality: faker.location.city(),
            region: faker.location.state(),
            postalCode: faker.location.zipCode(),
            countryName: faker.location.country()
          },
          contactPoint: {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            telephone: faker.phone.number(),
            faxNumber: faker.phone.number(),
            url: faker.internet.url()
          }
        }),
        uri: faker.internet.url(),
        amount: JSON.stringify({ amount: faker.number.int({min:1,max:100}), currency: 'MXN' }),
        providerOrganization: JSON.stringify({ scheme: 'CPV', id: 'ID', legalName: 'Descripción', uri: 'https://' }),
        receiverOrganization: JSON.stringify({ scheme: 'CPV', id: 'ID', legalName: 'Descripción', uri: 'https://' }),
        createdAt: now,
        updatedAt: now
      });
      contractsItems.push({
        contractId: i,
        description: faker.commerce.productDescription(),
        classification: JSON.stringify({ scheme: 'CPV', id: 'ID', description: 'Descripción' }),
        additionalClassifications: JSON.stringify({ scheme: 'CPV', id: 'ID', description: 'Descripción', uri: 'https://' }),
        quantity: faker.number.int({ min:1, max:100 }),
        unit: JSON.stringify({ scheme: 'UNCEFACT', id: 'ID', name: 'unit', value: { amount: faker.number.int({min:1,max:100}), currency: 'MXN' }, uri: 'https://' }),
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
    await queryInterface.bulkInsert('Tenderers', tenderers);
    await queryInterface.bulkInsert('Awards', awards);
    await queryInterface.bulkInsert('AwardsItems', awardsItems);
    await queryInterface.bulkInsert('Suppliers', suppliers);
    await queryInterface.bulkInsert('Contracts', contracts);
    await queryInterface.bulkInsert('Implementations', implementations);
    await queryInterface.bulkInsert('Transactions', transactions);
    await queryInterface.bulkInsert('ContractsItems', contractsItems);

    // === DOCUMENTS & MILESTONES ===
    const documents = [];
    const milestones = [];
    const milestoneDocuments = [];

    const numberOfAmendments = faker.number.int({ min: 3, max: 5 });

    for (let i = 1; i <= 10; i++) {
      const types = ['Tender', 'Award', 'Contract'];
      for (const t of types) {
        amendments.push({
          parentType: t,
          parentId: i,
          amendmentId: faker.string.uuid(), 
          description: faker.commerce.productDescription(),
          rationale: faker.commerce.productDescription(),
          amendsReleaseID: faker.string.alphanumeric(8),
          releaseID: faker.string.alphanumeric(8),
          date: faker.date.recent(),
          changes:JSON.stringify({ 
              property: 'someProperty',
              former_value: faker.commerce.productName()
          }),
          isCurrent: 0, 
          createdAt: now,
          updatedAt: now
        });
    
      }
    }

    for (let i = 1; i <= 10; i++) {
      const types = ['Planning', 'Tender', 'Award', 'Contract', 'Implementation'];
      for (const t of types) {
        documents.push({
          parentType: t,
          parentId: i,
          documentType: t.toLowerCase() + 'Notice',
          title: faker.lorem.words(3),
          description: faker.lorem.sentence(),
          url: faker.internet.url(),
          datePublished: now,
          dateModified: now,
          format: 'pdf',
          language: 'es',
          createdAt: now,
          updatedAt: now
        });

        milestones.push({
          parentType: t,
          parentId: i,
          title: faker.lorem.words(2),
          type: t.toLowerCase(),
          description: faker.lorem.sentence(),
          code: faker.string.alpha(5),
          dueDate: now,
          dateMet: now,
          dateModified: now,
          status: 'scheduled',
          createdAt: now,
          updatedAt: now
        });
      }

      // Subdocument for milestone
      milestoneDocuments.push({
        milestoneId: i,
        documentType: 'milestoneAttachment',
        title: faker.lorem.words(2),
        description: faker.lorem.sentence(),
        url: faker.internet.url(),
        datePublished: now,
        dateModified: now,
        format: 'pdf',
        language: 'es',
        createdAt: now,
        updatedAt: now
      });
    }

    await queryInterface.bulkInsert('Documents', documents);
    await queryInterface.bulkInsert('Milestones', milestones);
    await queryInterface.bulkInsert('MilestoneDocuments', milestoneDocuments);
    await queryInterface.bulkInsert('Amendments', amendments);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MilestoneDocuments', null, {});
    await queryInterface.bulkDelete('Milestones', null, {});
    await queryInterface.bulkDelete('Documents', null, {});
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
    await queryInterface.bulkDelete('Amendments', amendments);
  }
};
