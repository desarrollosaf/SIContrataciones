"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
class Metadata extends sequelize_1.Model {
}
Metadata.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    releaseId: { type: sequelize_1.DataTypes.INTEGER },
    actualizacion: { type: sequelize_1.DataTypes.DATE },
    institucion: { type: sequelize_1.DataTypes.STRING },
    contacto: { type: sequelize_1.DataTypes.STRING },
    personaContacto: { type: sequelize_1.DataTypes.STRING },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Metadata',
});
exports.default = Metadata;
