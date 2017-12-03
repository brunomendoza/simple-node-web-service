var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');

// The / route within your user controller
// will get mapped to /users.
app.use('/users', UserController);

// Make this app object visible to the rest of the program
module.exports = app;


