const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    app.set('views', './views');
    app.set('view engine', 'ejs');
    //config static file
    app.use(express.static('./public'));
}

module.exports = configViewEngine;