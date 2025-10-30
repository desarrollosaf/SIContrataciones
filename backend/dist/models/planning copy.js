"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
const budget_1 = __importDefault(require("./budget"));
const Document_1 = __importDefault(require("./Document"));
const Milestone_1 = __importDefault(require("./Milestone"));
class Planning extends sequelize_1.Model {
}
Planning.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: sequelize_1.DataTypes.INTEGER },
    rationale: { type: sequelize_1.DataTypes.TEXT },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Plannings',
});
Planning.hasOne(budget_1.default, { as: 'budget', foreignKey: 'planningId' });
Planning.hasMany(Document_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Planning' }, as: 'documents' });
Planning.hasMany(Milestone_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Planning' }, as: 'milestones' });
exports.default = Planning;
