"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
const transaction_1 = __importDefault(require("./transaction"));
const Document_1 = __importDefault(require("./Document"));
const Milestone_1 = __importDefault(require("./Milestone"));
class Implementation extends sequelize_1.Model {
}
Implementation.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    contractId: { type: sequelize_1.DataTypes.INTEGER },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Implementations',
});
Implementation.hasMany(transaction_1.default, { as: 'transactions', foreignKey: 'implementationId' });
Implementation.hasMany(Document_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Implementation' }, as: 'documents' });
Implementation.hasMany(Milestone_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Implementation' }, as: 'milestones' });
exports.default = Implementation;
