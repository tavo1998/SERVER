const express = require('express');
const { addCliente, getCliente, getClientes } = require('./../controllers/clienteController');

const router = express.Router();

router.post('/', addCliente);
router.get('/:id', getCliente);
router.get('/', getClientes);

module.exports = router;