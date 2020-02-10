var express = require('express');
var router = express.Router();



var Chat=require('../models/chat.js');



/*router.get('/',async function(req, res) {
	await Chat.find({}, function(err,massegeList)
  {
    //console.log("branches");
    //console.log(branches);
    //console.log("in cart routing"+ req.params.userNmae);

    res.render('chat',{chatList:massegeList});
  });
});
*/
router.get('/:userName', function(req, res){
  console.log("we are in conntroller chat");
  var userName=req.params.userName;
  //console.log(userName);
    res.render('myChat',{userName:userName});
    //res.sendFile(__dirname + '/chat.html');
});
/*router.post('/add',async function(req, res) {
  
  let flowerToAdd=await Flower.findOne({name:req.body.flowerName});
  Cart.create({
    uName:req.body.uName,
    name:req.body.flowerName,
    color:flowerToAdd.color,
    image:flowerToAdd.image,
    price:flowerToAdd.price,
    });
   setTimeout(function(){ res.send('OK'); }, 1000);
   
 });*/



module.exports = router;