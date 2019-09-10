const express = require('express');
const { addItemsPedido, getItemsPedido } = require('./../controllers/itemsPedidoController');

const router = express.Router();

router.post('/', addItemsPedido);
router.get('/:id', getItemsPedido);


module.exports = router;