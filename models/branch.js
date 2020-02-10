// BRANCH MODEL (SCHEMA)

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db=mongoose.createConnection('mongodb://localhost/targil6');


var Branch = new Schema({
	address:String,
	category:String,
	manager:String,
	tel:String,
});

module.exports = db.model('Branch', Branch,"branches");