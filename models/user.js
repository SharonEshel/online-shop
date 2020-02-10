// USER MODEL (SCHEMA)

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db=mongoose.createConnection('mongodb://localhost/targil6');


var User = new Schema({
	category: String,
    id: Number,
    mail: String,
    name: String,
    //pass: {type: String, required: true},
    pass: String,
    tel: String,
    uName: String
   // uName: {type: String, required: true}
});

module.exports = db.model('User', User,"users");