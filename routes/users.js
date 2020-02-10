var express = require('express');
var router = express.Router();

//let fs= require ('fs');
//var users= require('../public/data/users.json');
var User=require('../models/user.js');


/* GET users listing. */
router.get('/', async function(req, res) {
  await User.find({}, function(err,users)
  {
  res.render('users',{users:users});
  });
});


router.get('/forWorker',async function(req, res) {
  var clients =await User.find({category:"client"});

  res.render('usersForWorker',{users:clients});
});



router.post('/premissions',async function(req, res) {
  
  let user=await User.findOne({uName:req.body.userName });
  
  if (user!=null)
    setTimeout(function(){ res.send(user.category); }, 1000);
  else
    setTimeout(function(){ res.send(""); }, 1000);

});


router.post('/add',async function(req, res) {
 
  let user=await User.findOne({uName:req.body.userName2});
   if(user==null){
   User.create({
       name:req.body.userName1,
       category:req.body.uCategory,
       tel: req.body.uTel,
       id:req.body.uId,
       mail: req.body.uMail,
       uName:req.body.userName2,
       pass:req.body.uPass
     });
   setTimeout(function(){ res.send('OK'); }, 1000);
   }
   else
   setTimeout(function(){ res.send('This userName is used in the system'); }, 1000);
 });


router.post('/delete',async function(req, res) {
  
  await User.findOneAndDelete({uName:req.body.userName2});
  setTimeout(function(){ res.send('OK'); }, 1000);

 });


 router.post('/edit',async function(req, res) {  
  
  await User.findOneAndDelete({uName:req.body.userName2});

  User.create({
      name:req.body.userName1,
      category:req.body.uCategory,
      tel: req.body.uTel,
      id:req.body.uId,
      mail: req.body.uMail,
      uName:req.body.userName2,
      pass:req.body.uPass
  });
  
	setTimeout(function(){ res.send('OK'); }, 1000);
	
});


 
router.post('/get',async function(req, res) {
  
  let user=await User.findOne({ uName:req.body.userName2,});    

  if(user!=null)
	setTimeout(function(){ res.send(user); }, 1000); 
  else
	setTimeout(function(){ res.send("Error. The user isn't exit in the system"); }, 1000);
});

router.post('/login',async function(req, res) {
	
  
  let user=await User.findOne({ uName:req.body.userName, pass:req.body.userPassword}) ;   
  if(user!=null)
	  setTimeout(function(){ res.send('OK'); }, 1000);
  else
	setTimeout(function(){ res.send('Error. userName or password ane wrong'); }, 1000);
});

module.exports = router;
