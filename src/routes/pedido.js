const express = require('express');
const { addPedido, getPedido, getPedidos, totalPedidos } = require('./../controllers/pedidoController');


const router = express.Router();

router.post('/', addPedido);
router.get('/:id', getPedido);
router.get('/', getPedidos);
router.get('/balance/total', totalPedidos);

module.exports = router;