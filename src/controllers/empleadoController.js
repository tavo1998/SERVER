const Empleado = require('./../models/empleado');

const addEmpleado = (req,res) => {
    const { cc, nombre, apellido, telefono, direccion } = req.body;
    
    Empleado.create({cc, nombre, apellido, telefono, direccion})
        .then(empleado => res.json({status: 'ok', data: empleado}))
        .catch(e => {
            res.json({
                status: 'error', 
                message: 'Ocurrió un error al agregar un nuevo empleado'
            })
        })
}

const getEmpleado = (req, res) => {

    const cc = req.params.cc;

    Empleado.findOne({where: {cc}})
        .then(data => res.json({status: 'ok', data}))
        .catch(e => res.json({
            status: 'error',
            message: `Error al traer el empleado con id: ${cc}`
        }))
}

const getEmpleados = (req,res) => {
    Empleado.findAll()
        .then(data => res.json({status: 'ok', data}))
        .catch(e => {
            res.json({
                status: 'error',
                message: 'Error al traer todos los empleados'
            })
        })
}

module.exports = {
    addEmpleado,
    getEmpleado,
    getEmpleados
}