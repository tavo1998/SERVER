const express = require('express');
const { addProducto, getProducto, getProductos } = require('./../controllers/productoController'); 


const router = express.Router();


router.post('/', addProducto);
router.get('/:id', getProducto);
router.get('/', getProductos);

module.exports = router;