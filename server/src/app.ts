import express  from 'express';
import path  from 'path';
import cookieParser  from 'cookie-parser';
import logger  from 'morgan';
import cors from 'cors' 
const app = require('express')();
import http  from 'http'
import socketIO  from 'socket.io' ; 
import registerCallbacks from './routes/chat';

const server = new http.Server(app) ; 
const io = socketIO(server) ; 
const port = process.env.PORT||9000 ; 


server.listen(port);
// WARNING: app.listen(80) will NOT work here!

app.set('port' , port) ; 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cors()) ; 

// app.use(express.static(path.join(__dirname, 'public'))); NO PUBLIC FOLDER IN SERVER SIDE

app.get('/', function (req : express.Request, res : express.Response) {
  res.send('index page')
});

io.of('/chat').on('connection', (soc : SocketIO.Socket)=>{
  registerCallbacks(soc , io) ;  
})

module.exports = {
  io : io , 
  app : app
}