const Producto = require('./../models/producto');

const addProducto = (req,res) => {
    const { nombre, cantidad, precio } = req.body;

    Producto.create({nombre, cantidad, precio})
    .then(producto => res.json({status: 'ok', data: producto}))
    .catch(() => res.json({
        status: 'error',
        message: 'Error al intentar agregar un nuevo producto'
    }))

}

const getProducto = (req, res) => {
    const { id } = req.params;

    Producto.findOne({ where: { id }})
        .then(producto => {
            if(producto == null){
                res.json({
                    status: 'error',
                    message: `El producto con id ${id} no existe`
                })
            }else{
                res.json({
                    status: 'ok',
                    data: producto
                })
            }
        })
        .catch(() => res.json({
            status: 'error',
            message: `Error al intentar obtener el producto con id: ${id}`
        }))

}

const getProductos = (req,res) => {
    Producto.findAll()
        .then(Productos => res.json({status: 'ok', data: Productos}))
        .catch(() => res.json({
            status: 'error',
            message: 'Error al intentar obtener los productos'
        }))
}

const comprarProducto = (req,res) => {
    const { id, cantidad } = req.body;

    Producto.findOne({where: {id}})
        .then(producto => producto.increment('cantidad', {by: cantidad}))
        .then(producto => res.json({status: 'ok', data: producto}))
        .catch(() => res.json({status: 'error', message: 'Error al actualizar el producto'}))

}

const venderProducto = (req,res) => {
    const { id, cantidad } = req.body;

    Producto.findOne({where: {id}})
        .then(producto => producto.decrement('cantidad', {by: cantidad}))
        .then(producto => res.json({status: 'ok', data: producto}))
        .catch((e) => res.json({status: 'error', message: e.original.message}))
        
}

module.exports = {
    addProducto,
    getProducto,
    getProductos,
    comprarProducto,
    venderProducto
}