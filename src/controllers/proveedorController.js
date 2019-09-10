const Proveedor = require('./../models/proveedor');

const addProveedor = (req,res) => {
    const { nit, nombre, telefono, direccion, email, tipo } = req.body;

    Proveedor.create({nit, nombre, telefono, direccion,email, tipo})
        .then(proveedor => res.json({status: 'ok', data: proveedor}))
        .catch(() => res.json({
            status: 'error',
            message: 'Error al agregar el proveedor'
        }))

}

const getProveedor = (req,res) => {
    const { id } = req.params;

    Proveedor.findOne({ where: { nit: id }})
        .then(proveedor => {
            if(proveedor == null)
                res.json({status: 'error', message: `El proveedor con nit ${id} no existe`})
            else
                res.json({status: 'ok', data: proveedor})
            
        })
        .catch(() => res.json({
            status: 'error',
            message: `Error al intentar obtener el proveedor con id ${id}`
        }))

}

const getProveedores = (req,res) => {
    Proveedor.findAll()
        .then(proveedores => res.json({status: 'ok', data: proveedores}))
        .catch(() => res.json({ status: 'error', message: 'Error al intentar obtener los proveedores' }))
}

module.exports = {
    addProveedor,
    getProveedor,
    getProveedores
}