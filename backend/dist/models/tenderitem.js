"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
class TenderItem extends sequelize_1.Model {
}
TenderItem.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    tenderId: { type: sequelize_1.DataTypes.INTEGER },
    description: { type: sequelize_1.DataTypes.TEXT },
    classification: { type: sequelize_1.DataTypes.JSON },
    additionalClassifications: { type: sequelize_1.DataTypes.JSON },
    quantity: { type: sequelize_1.DataTypes.INTEGER },
    unit: { type: sequelize_1.DataTypes.JSON },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'TenderItems',
});
exports.default = TenderItem;
