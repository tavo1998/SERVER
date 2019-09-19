const express = require('express');
const { addVenta, getVenta, getVentas, totalVentas } = require('./../controllers/ventaController');

const router = express.Router();


router.post('/', addVenta);
router.get('/:id', getVenta);
router.get('/', getVentas);
router.get('/balance/total', totalVentas);

module.exports = router;