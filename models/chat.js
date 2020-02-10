// cart MODEL (SCHEMA)
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db=mongoose.createConnection('mongodb://localhost/targil6');


var Chat = new Schema({
    uName:String,
    massege:String,
	date:Date
});


//module.exports = mongoose.model('Flower', Flower,"flowers");
module.exports = db.model('Chat', Chat,"chat");
