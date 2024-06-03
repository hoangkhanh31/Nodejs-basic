require('dotenv').config();
const express = require('express');  //commonjs     //--or-- import express from 'express';    // es modules
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express();   // app express
const port = process.env.PORT || 8888;       //port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//Khai báo route
app.use('/',webRoutes);



app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})