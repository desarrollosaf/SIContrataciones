"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
const implementation_1 = __importDefault(require("./implementation"));
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
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Contracts',
});
Contract.hasOne(implementation_1.default, { as: 'implementation', foreignKey: 'contractId' });
exports.default = Contract;
