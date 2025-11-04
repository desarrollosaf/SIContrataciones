"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
class ContractItem extends sequelize_1.Model {
}
ContractItem.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    contractId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Contracts', key: 'id' },
        onDelete: 'CASCADE',
    },
    description: { type: sequelize_1.DataTypes.TEXT },
    classification: { type: sequelize_1.DataTypes.JSON },
    additionalClassifications: { type: sequelize_1.DataTypes.JSON },
    quantity: { type: sequelize_1.DataTypes.INTEGER },
    unit: { type: sequelize_1.DataTypes.JSON },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'ContractsItems',
    modelName: 'ContractItem',
    timestamps: true,
});
exports.default = ContractItem;
