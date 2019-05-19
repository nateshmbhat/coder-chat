import express  from 'express';
import path  from 'path';
import cookieParser  from 'cookie-parser';
import logger  from 'morgan';
import cors from 'cors' 
const app = require('express')();
import http  from 'http'
import socketIO  from 'socket.io' ; 

const server = http.Server(app) ; 
const io = socketIO(server) ; 


server.listen( 9000);
// WARNING: app.listen(80) will NOT work here!

app.set('port' , process.env.PORT ||  9000) ; 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors()) ; 

// app.use(express.static(path.join(__dirname, 'public'))); NO PUBLIC FOLDER IN SERVER SIDE

app.get('/', function (req, res) {
  res.send('index page')
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