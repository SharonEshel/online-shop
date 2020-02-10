var express = require('express');
var router = express.Router();

var Branch=require('../models/branch.js');


router.get('/',async function(req, res) {


  await Branch.find({}, function(err,branches)
  {
    //console.log("branches");
    //console.log(branches);

    res.render('branches',{branchesList:branches});
  });
});

router.post('/add', async function(req, res) {
 
	let flag=1;

	let branches= await Branch.find();
	await branches.forEach(function(Abranch) { if(Abranch.address==req.body.bAddress)  flag=0 });    
	 
	 if(flag==1){
	 Branch.create({
		 address:req.body.bAddress,
		 category:req.body.bCategory,
		 manager: req.body.bManager,
		 tel:req.body.bTel
	 });
	   
	   setTimeout(function(){ res.send('OK'); }, 1000);
	 }
	 else
	   setTimeout(function(){ res.send('This branchAddress is used in the system'); }, 1000);
   });
   


router.post('/delete',async function(req, res) {
 	let flag=1;
	
 	await Branch.deleteOne({tel: req.body.bAddress});

 	if(flag==1)
		setTimeout(function(){ res.send('OK'); }, 1000);
	else
		setTimeout(function(){ res.send("ERROR.the branch isn't delete"); }, 1000);
});

router.post('/get', async function(req, res) {
  
	let aBranch= await Branch.findOne({tel:req.body.branchAdress2});
    if (aBranch!=null)
	setTimeout(function(){ res.send(aBranch); }, 1000);
  else
	setTimeout(function(){ res.send("Error. The user isn't exit in the system"); }, 1000);
});

  

module.exports = router;


