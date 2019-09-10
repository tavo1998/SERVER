const express = require('express');
const morgan = require('morgan');
const loginRouter = require('./routes/login');

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(morgan('tiny'));

//SETTINGS
app.set('PORT', 5000);


//ROUTES
app.use('/auth', loginRouter);


app.listen(app.get('PORT'), () => {
    console.log('Funcionando con éxito');
})