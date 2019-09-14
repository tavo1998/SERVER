const express = require('express');
const { addProducto, getProducto, getProductos, comprarProducto, venderProducto } = require('./../controllers/productoController'); 

const router = express.Router();


router.post('/', addProducto);
router.get('/:id', getProducto);
router.get('/', getProductos);
router.put('/comprar', comprarProducto);
router.put('/vender', venderProducto);

module.exports = router;