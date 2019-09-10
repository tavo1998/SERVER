const express = require('express');
const { addProveedor, getProveedor, getProveedores } = require('./../controllers/proveedorController');
const Proveedor = require('./../models/proveedor');

const router = express.Router();

router.post('/', addProveedor);
router.get('/:id', getProveedor);
router.get('/', getProveedores);



module.exports = router;