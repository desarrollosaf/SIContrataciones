"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
const MilestoneDocument_1 = __importDefault(require("./MilestoneDocument"));
class Milestone extends sequelize_1.Model {
}
Milestone.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    parentType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: 'planning, tender, contract, etc.',
    },
    parentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    dueDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    dateMet: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    dateModified: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
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
    tableName: 'Milestones',
    modelName: 'Milestone',
    timestamps: true,
});
// Asociaciones
Milestone.hasMany(MilestoneDocument_1.default, {
    foreignKey: 'milestoneId',
    as: 'documents',
});
exports.default = Milestone;
