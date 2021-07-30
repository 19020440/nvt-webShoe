const express = require('express');
const siteRouter = require('./site');
const productRouter = require('./product');
function route(app) {
    
    app.use('/shoes', productRouter);
    app.use('/',siteRouter );
    
}

module.exports = route;