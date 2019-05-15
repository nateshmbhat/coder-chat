var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require("cors") ; 

const app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen( 9000);
// WARNING: app.listen(80) will NOT work here!

app.set('port' , process.env.PORT ||  9000) ; 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors()) ; 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('index')
});

io.of('/chat').on('connection', (soc)=>{
  console.log('/chat connected : ' ) ; 

  soc.on('message' , (msg)=>{
    console.log('message from : ' , soc.id  , ' : ', msg) ; 
  })
  
})

module.exports = {
  io : io , 
  app : app
}