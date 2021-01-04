// add modules
const express = require('express');
const bodyParser = require('body-parser');
const getConfig = require("gh-get-config");
const errorLog = require("gh-logger");
const db = require('mongoose');

// set parameters for gh-get-config
getConfig('connect', __dirname, './config/mainConfig.json')

// get config parameters
const PORT = getConfig("PORT");
const textInitialization = getConfig("textInitialization");
const dbUrl = getConfig("dbUrl");

// set parameters for error logger
errorLog.connect(__dirname, './error/errorLog.json');

// connect with db
    db.connect(dbUrl, {
        useNewUrlParser: true
    })
        .then(() => console.log(`${textInitialization} Connection - successfully`))
        .catch((err) => {
            console.log(`${textInitialization} failed connection`, {error: err});
            errorLog.addLog(err);
            return;
        });

// creating app
const app = express();

// add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api', require('./bin/routes'));
//app.use('/swagger', require('./bin/routes'));

// server listen
app.listen(PORT, function() {
    console.log(`${textInitialization} Server started on port ${PORT}`);
});