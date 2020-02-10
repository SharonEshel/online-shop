let path = require('path');
let express = require('express');
let app = express();


let bodyParser = require('body-parser'); 
app.use(bodyParser.json({ type: 'application/json' }));
var mongoose=require('mongoose');



var http = require('http').Server(app);
var io = require('socket.io')(http);




//mongo connection
var db=mongoose.createConnection('mongodb://localhost/targil6');
mongoose.connection.on('error', function() {
	console.log('MongoDB Connection Error. Please make sure that MongoDB is running');
	process.exit(1);
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

indexRouter = require('./routes/index');
contactUsRouter=require('./routes/contactUs');
branchRouter=require('./routes/branches');
aboutRouter=require('./routes/about');
productsRouter=require('./routes/products');
userRouter=require('./routes/users');
cartRouter=require('./routes/carts');
chatRouter=require('./routes/chats');
			  
app.use('/',indexRouter);
app.use('/contactUs',contactUsRouter);
app.use('/branches',branchRouter);
app.use('/about',aboutRouter);
app.use('/products',productsRouter);
app.use('/users',userRouter);
app.use('/cart',cartRouter);
app.use('/chat',chatRouter);


/*
io.sockets.on('connection', function (socket) {
	console.log("socket connection");
	socket.on('message', function (data) {
	  socket.emit('news', { hello: 'world' });
	});
  
	socket.on('another-message', function (data) {
	  socket.emit('not-news', { hello: 'world' });
	});
});*/



/* Sends a message to the console when a user has connected or distontected from the server (acsesed the webpage) */
io.on('connection', function(socket){ /* Asks itself whether someone has connected */
	console.log('a user connected'); /* Outputs "a user connected" to the console when someone visits the webpage */
	socket.on('disconnect', function(){ /* Asks itself whether someone has disconeccted */
		console.log('a user disconnected'); /* Outputs "a user disconnected" to the console when someone closes the webpage */
	});
});


var timeStamp = new Date().toLocaleString();

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		var timeStamp = new Date().toLocaleString();
		console.log(msg.pseudo + " " + msg.message + " " + timeStamp); /* adds the username, message and timestamp together with spaces between and outputs it to the console */
		io.emit('chat message', msg,timeStamp);
	});
});



//app
http.listen(8083, function () {
  console.log('Listening on port 8083!');
});
