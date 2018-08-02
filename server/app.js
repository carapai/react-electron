(function () {
    'use strict';

    var express = require('express');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var routes = require('./routes.js');
    var cors = require('cors');


    var app = express();
    var port = 8000;

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(cors());

    app.use('/', routes);

    app.use(cookieParser());

    var server = app.listen(port, function () {
        console.log('Express server listening on port ' + server.address().port);
    });
    module.exports = app;
}());