const Sequelize = require('sequelize');
const sequelize = require('./../db');

const Cliente = sequelize.define('cliente', {
    cc: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    apellido: {
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
    }
})

module.exports = Cliente;