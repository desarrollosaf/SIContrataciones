import { Sequelize } from "sequelize"

const sequelizeCuestionarios = new Sequelize('adminplem_contrataciones', 'docker_contrataciones', 'dMhqFn5t46Dx75ZTQOSa', {
    host: '192.168.36.54',
    port: 3307,
    dialect: 'mysql',
    define: {
        freezeTableName: true 
    }
})
export default sequelizeCuestionarios 
