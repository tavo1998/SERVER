const express = require('express');
const { addVenta, getVenta, getVentas } = require('./../controllers/ventaController');

const router = express.Router();


router.post('/', addVenta);
router.get('/:id', getVenta);
router.get('/', getVentas);

module.exports = router;