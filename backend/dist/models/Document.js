"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
class Document extends sequelize_1.Model {
}
Document.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    parentType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: 'planning, tender, contract, milestone, etc.',
    },
    parentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        comment: 'id del registro asociado (Planning, Tender, etc.)',
    },
    documentType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    datePublished: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    dateModified: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    format: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    language: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Documents',
    modelName: 'Document',
    timestamps: true,
});
exports.default = Document;
