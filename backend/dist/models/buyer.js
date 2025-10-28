"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
class Buyer extends sequelize_1.Model {
}
Buyer.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    releaseId: { type: sequelize_1.DataTypes.INTEGER },
    name: { type: sequelize_1.DataTypes.STRING },
    idOrg: { type: sequelize_1.DataTypes.STRING },
    identifier: { type: sequelize_1.DataTypes.JSON },
    additionalIdentifiers: { type: sequelize_1.DataTypes.JSON },
    address: { type: sequelize_1.DataTypes.JSON },
    contactPoint: { type: sequelize_1.DataTypes.JSON },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Buyers',
});
exports.default = Buyer;
