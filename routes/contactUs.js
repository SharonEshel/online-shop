var express = require('express');
var router = express.Router();

/* GET contactUs page. */
router.get('/', function(req, res, next) {
  res.render('contactUs');
});

module.exports = router;


