const express = require('express');
const { addPedido, getPedido, getPedidos } = require('./../controllers/pedidoController');

const router = express.Router();

router.post('/', addPedido);
router.get('/:id', getPedido);
router.get('/', getPedidos);

module.exports = router;