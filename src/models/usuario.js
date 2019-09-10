const Sequelize = require('sequelize');
const sequelize = require('./../db');
const Empleado = require('./empleado');

const Usuario = sequelize.define('usuario', {
    nombre: {
        type: Sequelize.STRING(20),
        primaryKey: true
    },
    clave: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cc: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Empleado,
            key: 'cc',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

module.exports = Usuario;