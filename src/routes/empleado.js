const express = require('express');
const { addEmpleado, getEmpleado, getEmpleados } = require('./../controllers/empleadoController');

const router = express.Router();


router.post('/', addEmpleado);
router.get('/', getEmpleados);
router.get('/:cc', getEmpleado);

module.exports = router;

