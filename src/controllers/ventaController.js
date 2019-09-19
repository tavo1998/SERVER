const Venta = require('./../models/venta');
const sequelize = require('./../db');

const addVenta = (req,res) => {
    const { fecha, cliente, empleado } = req.body;
    
    Venta.create({fecha, cliente, empleado})
        .then(venta => res.json({status: 'ok', data: venta}))
        .catch(() => res.json({
            status: 'error',
            message: 'Error al intentar crear una venta'
        }))        
}

const getVenta = (req, res) => {
    const { id } = req.params;

    Venta.findOne({ where: { numeroventa: id }})
     .then(venta => {
         if(venta === null){
            res.json({status: 'error', message: `La venta con identificador ${id} no existe`})
         }else{
            res.json({status: 'ok', data: venta})
         }
     })
     .catch(() => res.json({
         status: 'error',
         message: `Error al intentar obtener la venta con identificador ${id}`
     }))

}

const getVentas = (req,res) => {
    Venta.findAll()
        .then(ventas => res.json({status: 'ok', data: ventas}))
        .catch(() => res.json({
            status: 'error',
            mesage: 'Error al intentar obtener las ventas'
        }))
}

const totalVentas = (req,res) => {
    Venta.findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('numeroventa')), 'total']]
    })
    .then(data => res.json({status:'ok', data: data[0]}))
    .catch(e => res.json({status: 'error', message: 'Error al intentar obtener la cantidad de ventas'}))

}


module.exports = {
    addVenta,
    getVenta,
    getVentas,
    totalVentas
};

