"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
class Budget extends sequelize_1.Model {
}
Budget.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    planningId: { type: sequelize_1.DataTypes.INTEGER },
    description: { type: sequelize_1.DataTypes.STRING },
    amount: { type: sequelize_1.DataTypes.JSON },
    project: { type: sequelize_1.DataTypes.STRING },
    projectID: { type: sequelize_1.DataTypes.STRING },
    uri: { type: sequelize_1.DataTypes.STRING },
    source: { type: sequelize_1.DataTypes.STRING },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Budgets',
});
exports.default = Budget;
