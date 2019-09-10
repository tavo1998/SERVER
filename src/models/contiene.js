const Sequelize = require('sequelize');
const sequelize = require('./../db');
const Pedido = require('./pedido');
const Producto = require('./producto');

const Contiene = sequelize.define('contiene', {
    numeropedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
            model: Pedido,
            key: 'numeropedido',
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

module.exports = Contiene;