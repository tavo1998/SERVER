const Sequelize = require('sequelize');
const sequelize = require('./../db');

const Producto = sequelize.define('producto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    cantidad: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    precio: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})


module.exports = Producto;