const { DATABASE, USERNAME, PASSWORD } = require('./../config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, 
    { 
        dialect: 'postgres',
        define: {
            timestamps: false,
            freezeTableName: true
        } 
    }
);

sequelize.authenticate()
    .then(() => console.log('Connection Established Database!'))
    .catch(() => console.log('Error Connection'))

module.exports = sequelize;