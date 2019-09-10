const Cliente = require('./../models/cliente');

const addCliente = (req,res) => {
    const { cc, nombre, apellido, telefono, direccion, email } = req.body;

    Cliente.create({cc, nombre, apellido, telefono, direccion, email})
        .then(cliente => res.json({status: 'ok', data: cliente}))
        .catch(() => res.json({status: 'error', message: 'Error al crear el cliente'}))

}

const getCliente = (req,res) => {
    const { id } = req.params;

    Cliente.findOne({ where: { cc: id } })
        .then(cliente => res.json({status: 'ok', data: cliente}))
        .catch(() => res.json({
            status: 'error',
            message: `Error al obtener el cliente con id: ${id}`
        }))

}

const getClientes = (req,res) => {
    Cliente.findAll()
        .then(clientes => res.json({status: 'ok', data: clientes}))
        .catch(() => res.json({
            status: 'error',
            message: 'Error al obtener todos los clientes'
        }))
}

module.exports = {
    addCliente,
    getCliente,
    getClientes
}