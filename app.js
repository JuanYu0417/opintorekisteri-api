    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');
    var cors = require('cors');

    var opiskelijaRouter = require('./routes/opiskelija'); // Opiskelija routes
    var opintojaksoRouter = require('./routes/opintojakso');// Opintojakso routes
    var arviointiRouter = require('./routes/arviointi');// Arviointi routes

    var app = express();

    app.use(cors()); // Enable CORS for all routes
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/opiskelija', opiskelijaRouter);// Opiskelija routes
    app.use('/opintojakso', opintojaksoRouter);// Opintojakso routes
    app.use('/arviointi', arviointiRouter);// Arviointi routes

    module.exports = app;