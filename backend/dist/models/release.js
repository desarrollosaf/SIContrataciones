"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const cuestionariosConnection_1 = __importDefault(require("../database/cuestionariosConnection"));
const metadata_1 = __importDefault(require("./metadata"));
const publisher_1 = __importDefault(require("./publisher"));
const party_1 = __importDefault(require("./party"));
const planning_1 = __importDefault(require("./planning"));
const tender_1 = __importDefault(require("./tender"));
const award_1 = __importDefault(require("./award"));
const contract_1 = __importDefault(require("./contract"));
const buyer_1 = __importDefault(require("./buyer"));
class Release extends sequelize_1.Model {
}
Release.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ocid: { type: sequelize_1.DataTypes.STRING },
    cycle: { type: sequelize_1.DataTypes.INTEGER },
    language: { type: sequelize_1.DataTypes.STRING },
    date: { type: sequelize_1.DataTypes.DATE },
    initiationType: { type: sequelize_1.DataTypes.STRING },
    tag: { type: sequelize_1.DataTypes.JSON },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, {
    sequelize: cuestionariosConnection_1.default,
    tableName: 'Releases',
});
Release.hasOne(metadata_1.default, { as: 'metadata', foreignKey: 'releaseId' });
Release.hasOne(publisher_1.default, { as: 'publisher', foreignKey: 'releaseId' });
Release.hasOne(party_1.default, { as: 'parties', foreignKey: 'releaseId' });
Release.hasOne(planning_1.default, { as: 'planning', foreignKey: 'releaseId' });
Release.hasOne(tender_1.default, { as: 'tender', foreignKey: 'releaseId' });
Release.hasOne(award_1.default, { as: 'awards', foreignKey: 'releaseId' });
Release.hasOne(contract_1.default, { as: 'contracts', foreignKey: 'releaseId' });
Release.hasOne(buyer_1.default, { as: 'buyer', foreignKey: 'releaseId' });
exports.default = Release;
