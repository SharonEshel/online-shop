var express = require('express');
var router = express.Router();

var Cart=require('../models/cart.js');
var Flower=require('../models/flower.js');


/*router.get('/',async function(req, res) {


    await Branch.find({}, function(err,branches)
    {
      //console.log("branches");
      //console.log(branches);
  
      res.render('branches',{branchesList:branches});
    });
  });
*/



router.get('/:userNmae',async function(req, res) {
	await Cart.find({uName:req.params.userNmae}, function(err,productsList)
  {
    //console.log("branches");
    //console.log(branches);
    //console.log("in cart routing"+ req.params.userNmae);
    res.render('cart',{cartList:productsList});
  });
});

router.post('/add',async function(req, res) {
  
  let flowerToAdd=await Flower.findOne({name:req.body.flowerName});
  Cart.create({
    uName:req.body.uName,
    name:req.body.flowerName,
    color:flowerToAdd.color,
    image:flowerToAdd.image,
    price:flowerToAdd.price,
    });
   setTimeout(function(){ res.send('OK'); }, 1000);
   
 });

router.post('/delete',async function(req, res) {
  let flag=1;
 
  await Cart.deleteOne({name: req.body.flowerName,uName:req.body.uName});

  if(flag==1)
   setTimeout(function(){ res.send('OK'); }, 1000);
 else
   setTimeout(function(){ res.send("ERROR.the branch isn't delete"); }, 1000);
});


module.exports = router;