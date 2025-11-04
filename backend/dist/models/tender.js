"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
const tenderitem_1 = __importDefault(require("./tenderitem"));
const Document_1 = __importDefault(require("./Document"));
const Milestone_1 = __importDefault(require("./Milestone"));
const amendments_1 = __importDefault(require("./amendments"));
const tenders_1 = __importDefault(require("./tenders"));
class Tender extends sequelize_1.Model {
}
Tender.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: sequelize_1.DataTypes.INTEGER },
    title: { type: sequelize_1.DataTypes.STRING },
    description: { type: sequelize_1.DataTypes.TEXT },
    status: { type: sequelize_1.DataTypes.STRING },
    procuringEntity: { type: sequelize_1.DataTypes.JSON },
    value: { type: sequelize_1.DataTypes.JSON },
    minValue: { type: sequelize_1.DataTypes.JSON },
    procurementMethod: { type: sequelize_1.DataTypes.STRING },
    procurementMethodDetails: { type: sequelize_1.DataTypes.STRING },
    procurementMethodRationale: { type: sequelize_1.DataTypes.STRING },
    mainProcurementCategory: { type: sequelize_1.DataTypes.STRING },
    additionalProcurementCategories: { type: sequelize_1.DataTypes.JSON },
    awardCriteria: { type: sequelize_1.DataTypes.STRING },
    awardCriteriaDetails: { type: sequelize_1.DataTypes.STRING },
    submissionMethod: { type: sequelize_1.DataTypes.JSON },
    submissionMethodDetails: { type: sequelize_1.DataTypes.STRING },
    tenderPeriod: { type: sequelize_1.DataTypes.JSON },
    enquiryPeriod: { type: sequelize_1.DataTypes.JSON },
    hasEnquiries: { type: sequelize_1.DataTypes.BOOLEAN },
    eligibilityCriteria: { type: sequelize_1.DataTypes.STRING },
    awardPeriod: { type: sequelize_1.DataTypes.JSON },
    contractPeriod: { type: sequelize_1.DataTypes.JSON },
    numberOfTenderers: { type: sequelize_1.DataTypes.INTEGER },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Tenders',
});
Tender.hasOne(tenderitem_1.default, { as: 'items', foreignKey: 'tenderId' });
Tender.hasMany(Document_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Tender' }, as: 'documents' });
Tender.hasMany(Milestone_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Tender' }, as: 'milestones' });
Tender.hasMany(amendments_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Tender' }, as: 'amendments' });
Tender.hasMany(tenders_1.default, { as: 'tenderers', foreignKey: 'tenderId' });
Tender.hasOne(amendments_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Tender' }, as: 'amendment' });
;
exports.default = Tender;
