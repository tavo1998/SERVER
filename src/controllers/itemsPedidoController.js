const Contiene = require('./../models/contiene');

const addItemsPedido = (req, res) => {
    const { items } = req.body;

    Contiene.bulkCreate(items)
        .then(items => res.json({status: 'ok', data: items}))
        .catch(() => res.json({
            status: 'error',
            message: 'Error al ingresar items a un pedido'
        }))
}

const getItemsPedido = (req, res) => {
    const { id } = req.params;

    Contiene.findAll({ where: { numeropedido: id }})
        .then(items => res.json({status: 'ok', data: items}))
        .catch(() => res.json({
            status: 'error',
            message: `Error al traer los productos del pedido ${id}`
        }))
}


module.exports = {
    addItemsPedido,
    getItemsPedido
}