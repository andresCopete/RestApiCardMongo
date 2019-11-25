const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();


const userRouter = require('./routes/users');
mongoose.connect('mongodb://localhost/restAPI',{useNewUrlParser: true, useUnifiedTopology: true})
.then(db=>{console.log('base de datos conectada')})
.catch(err=>{console.log('Error al conectar a base de datos', err)})
app.use(morgan('dev'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);


//routes
app.use('/users', userRouter);

//static files
app.listen(app.get('port'), ()=>{
    console.log('Servidor Iniciado', app.get('port'))
});
