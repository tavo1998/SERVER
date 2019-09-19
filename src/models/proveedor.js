const Sequelize = require('sequelize');
const sequelize = require('./../db');

const Proveedor = sequelize.define('proveedor',{
    nit: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    telefono: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    direccion: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING(10),
        validate: {
            isIn: [['frutas', 'verduras']],
        }
    }
})

module.exports = Proveedor;