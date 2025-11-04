"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
const implementation_1 = __importDefault(require("./implementation"));
const Document_1 = __importDefault(require("./Document"));
const Milestone_1 = __importDefault(require("./Milestone"));
const amendments_1 = __importDefault(require("./amendments"));
const contractsitem_1 = __importDefault(require("./contractsitem"));
class Contract extends sequelize_1.Model {
}
Contract.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: sequelize_1.DataTypes.INTEGER },
    awardId: { type: sequelize_1.DataTypes.INTEGER },
    title: { type: sequelize_1.DataTypes.STRING },
    description: { type: sequelize_1.DataTypes.TEXT },
    status: { type: sequelize_1.DataTypes.STRING },
    period: { type: sequelize_1.DataTypes.JSON },
    value: { type: sequelize_1.DataTypes.JSON },
    dateSigned: { type: sequelize_1.DataTypes.DATE },
    relatedProcesses: { type: sequelize_1.DataTypes.JSON },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Contracts',
});
Contract.hasOne(implementation_1.default, { as: 'implementation', foreignKey: 'contractId' });
Contract.hasMany(Document_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Contract' }, as: 'documents' });
Contract.hasMany(Milestone_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Contract' }, as: 'milestones' });
Contract.hasMany(amendments_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Contract' }, as: 'amendments' });
Contract.hasOne(amendments_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Contract' }, as: 'amendment' });
Contract.hasMany(contractsitem_1.default, { foreignKey: 'contractId', as: 'items' });
exports.default = Contract;
