const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routes/auth');
const empleadoRouter = require('./routes/empleado');
const clienteRouter = require('./routes/cliente');
const productoRouter = require('./routes/producto');
const proveedorRouter = require('./routes/proveedor');
const pedidoRouter = require('./routes/pedido');
const itemsPedidoRouter = require('./routes/itemsPedido');
const ventaRouter = require('./routes/venta');
const itemsVentaRouter = require('./routes/itemsVenta');

//APLICATION INSTANCE
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(morgan('tiny'));

//SETTINGS
app.set('PORT', 5000);


//ROUTES
app.use('/auth', authRouter);
app.use('/empleado', empleadoRouter);
app.use('/cliente', clienteRouter);
app.use('/producto', productoRouter);
app.use('/proveedor', proveedorRouter);
app.use('/pedido', pedidoRouter);
app.use('/itemspedido', itemsPedidoRouter);
app.use('/venta', ventaRouter);
app.use('/itemsventa', itemsVentaRouter);

//START SERVER
app.listen(app.get('PORT'), () => {
    console.log('Funcionando con éxito');
})