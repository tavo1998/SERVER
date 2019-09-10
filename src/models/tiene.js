const Sequelize = require('sequelize');
const sequelize = require('./../db');
const Venta = require('./venta');
const Producto = require('./producto');

const Tiene = sequelize.define('tiene', {
    numeroventa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: Venta,
            key: 'numeroventa',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    producto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: Producto,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
})

module.exports = Tiene;