var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// The body-parser module is used as a middleware
// to handle data in a more elegant way
router.use(bodyParser.urlenconded({ extended: true }));

var User = require('./User');

module.exports = router;
