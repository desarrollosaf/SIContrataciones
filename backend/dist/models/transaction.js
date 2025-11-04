"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
class Transaction extends sequelize_1.Model {
}
Transaction.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    implementationId: { type: sequelize_1.DataTypes.INTEGER },
    source: { type: sequelize_1.DataTypes.STRING },
    date: { type: sequelize_1.DataTypes.DATE },
    value: { type: sequelize_1.DataTypes.JSON },
    payer: { type: sequelize_1.DataTypes.JSON },
    payee: { type: sequelize_1.DataTypes.JSON },
    uri: { type: sequelize_1.DataTypes.STRING },
    amount: { type: sequelize_1.DataTypes.JSON },
    providerOrganization: { type: sequelize_1.DataTypes.JSON },
    receiverOrganization: { type: sequelize_1.DataTypes.JSON },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Transactions',
});
exports.default = Transaction;
