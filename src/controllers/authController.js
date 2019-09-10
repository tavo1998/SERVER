const bcryp = require('bcrypt');
const Usuario = require('../models/usuario');

const registro = (req, res) => {
    const { nombre, clave, cc } = req.body;

    bcryp.hash(clave, 10)
        .then(hash => Usuario.create({nombre, clave: hash, cc}))
        .then(() => res.json({status: 'ok', data: 'Usuario Creado'}))
        .catch((e) => {
            console.log(e)
            res.json({
                status: 'error',
                message: 'Error al registrar un nuevo usuario' 
            })
        })
}

const login = (req, res) => {
    const { nombre, clave } = req.body;

    Usuario.findOne({ where: { nombre }})
        .then(user => {
            return bcryp.compare(clave,user.dataValues.clave)
        })
        .then(response => {
            if(response) res.json({status: 'ok', data: 'Acceso Permitido'})
            else res.json({status: 'error', message: 'Acceso Denegado'})
        })
        .catch((e) => {
            res.json({status: 'error', message: 'Acceso Denegado'})
        })
}

module.exports = {
    registro,
    login
}