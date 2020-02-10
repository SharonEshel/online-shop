'use strict';
var express = require('express');
var router = express.Router();

var Flower=require('../models/flower.js');

/* GET home page. */
router.get('/',async function(req, res, next) {

  await Flower.find({}, function(err,flowers)
  {
    //console.log("flowers");
    //console.log(flowers);

    res.render('products',{flowers:flowers});
  });

 
});

module.exports = router;



