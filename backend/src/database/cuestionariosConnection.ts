import { Sequelize } from "sequelize"

const sequelizeCuestionarios = new Sequelize('adminplem_sicontrataciones', 'usr_sicontrataciones', '4BPqX4HOF0CILk21SDLs', {
    host: '192.168.36.53',
    dialect: 'mysql',
    define: {
        freezeTableName: true 
    }
})
export default sequelizeCuestionarios 
