"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
const supplier_1 = __importDefault(require("./supplier"));
const Document_1 = __importDefault(require("./Document"));
const Milestone_1 = __importDefault(require("./Milestone"));
class Award extends sequelize_1.Model {
}
Award.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: sequelize_1.DataTypes.INTEGER },
    title: { type: sequelize_1.DataTypes.STRING },
    description: { type: sequelize_1.DataTypes.TEXT },
    status: { type: sequelize_1.DataTypes.STRING },
    date: { type: sequelize_1.DataTypes.DATE },
    value: { type: sequelize_1.DataTypes.JSON },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Awards',
});
Award.hasOne(supplier_1.default, { as: 'suppliers', foreignKey: 'awardId' });
Award.hasMany(Document_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Award' }, as: 'documents' });
Award.hasMany(Milestone_1.default, { foreignKey: 'parentId', constraints: false, scope: { parentType: 'Award' }, as: 'milestones' });
exports.default = Award;
