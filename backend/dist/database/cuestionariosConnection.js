"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelizeCuestionarios = new sequelize_1.Sequelize('adminplem_contrataciones', 'docker_contrataciones', 'dMhqFn5t46Dx75ZTQOSa', {
    host: '192.168.36.54',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
});
exports.default = sequelizeCuestionarios;
