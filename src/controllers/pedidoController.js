const Pedido = require('./../models/pedido');

const addPedido = (req, res) => {
    const { fecha, proveedor, empleado } = req.body;

    Pedido.create({fecha, proveedor, empleado})
        .then(pedido => res.json({status: 'ok', data: pedido}))
        .catch(() => res.json({
            status: 'error',
            message: 'Error al ingresar el pedido'
        }))
}

const getPedido = (req,res) => {
    const { id } = req.params;

    Pedido.findOne({ where: { numeropedido: id }})
        .then(pedido => {
            if(pedido == null){
                res.json({status: 'error', message: `El pedido con identificador ${id} no existe`})
            }else{
                res.json({status: 'ok', data: pedido})
            }
        })
        .catch(() => res.json({
            status: 'error', message: `Error al obtener el pedido con numero de pedido: ${id}`
        }))

}

const getPedidos = (req, res) => {
    Pedido.findAll()
        .then(pedidos => res.json({status: 'ok', data: pedidos}))
        .catch(() => res.json({
            status: 'error', 
            message: 'Error al intentar traer todos los pedidos' 
        }))
}

module.exports = {
    addPedido,
    getPedido,
    getPedidos
}