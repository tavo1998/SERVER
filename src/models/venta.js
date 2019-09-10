const Sequelize = require('sequelize');
const sequelize = require('./../db');
const Cliente = require('./cliente');
const Empleado = require('./empleado');

const Venta = sequelize.define('venta',{
    numeroventa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    cliente: {
        type: Sequelize.INTEGER,
        references: {
            model: Cliente,
            key: 'cc',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    empleado: {
        type: Sequelize.INTEGER,
        references: {
            model: Empleado,
            key: 'cc',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

module.exports = Venta;