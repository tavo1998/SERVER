const express = require('express');
const { addItemsVenta, getItemsVenta } = require('./../controllers/itemsVentaController');

const router = express.Router();

router.post('/', addItemsVenta);
router.get('/:id', getItemsVenta);

module.exports = router;