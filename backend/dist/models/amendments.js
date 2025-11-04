"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
class Amendment extends sequelize_1.Model {
}
Amendment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    parentType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    parentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    amendmentId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    rationale: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    amendsReleaseID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    releaseID: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    changes: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
    },
    isCurrent: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
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
    tableName: 'Amendments',
    modelName: 'Amendment',
    timestamps: true,
});
exports.default = Amendment;
