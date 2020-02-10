// flower MODEL (SCHEMA)
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db=mongoose.createConnection('mongodb://localhost/targil6');


var Flower = new Schema({
	name:String,
	color:String,
	image:String,
	price:String,
});


//module.exports = mongoose.model('Flower', Flower,"flowers");
module.exports = db.model('Flower', Flower,"flowers");
