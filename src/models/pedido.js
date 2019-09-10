const Sequelize = require('sequelize');
const sequelize = require('./../db');
const Proveedor = require('./proveedor');
const Empleado = require('./empleado');

const Pedido = sequelize.define('pedido', {
    numeropedido: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    proveedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Proveedor,
            key: 'nit',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    empleado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Empleado,
            key: 'cc',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

module.exports = Pedido;