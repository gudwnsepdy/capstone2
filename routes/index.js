var express = require('express');
var router = express.Router();
require('./post.js');
var app = express();

app.set('view engine', 'ejs');

var tit = count;
router.get('/', function (req, res, next) {
  res.render('index', { title: tit });
});


module.exports = router;