const Tiene = require('./../models/tiene');

const addItemsVenta = (req,res) => {
    const { items } = req.body;

    Tiene.bulkCreate(items)
        .then(items => res.json({status: 'ok', data: items}))
        .catch(() => res.json({
            status: 'error',
            message: 'Error al ingresar items a una venta' 
        }))
}

const getItemsVenta = (req, res) => {
    const { id } = req.params;

    Tiene.findAll({ where: { numeroventa: id }})
        .then(items => res.json({status: 'ok', data: items}))
        .catch(() => res.json({
            status: 'error',
            message: 'Error al intentar traer los items de una venta'
        }))
}

module.exports = {
    addItemsVenta,
    getItemsVenta
}