import socketIo from "socket.io"; 
let n = 1 ; 

const registerCallbacks = (soc : socketIo.Socket, io : SocketIO.Server )=>{
    console.log('/chat connected : ' ) ; 
  
    soc.on('message' , (msg)=>{
      console.log('message from : ' , soc.id  , ' : ', msg) ; 
      soc.broadcast.emit('message' , {
        id : soc.id , 
        msg : msg
      }) ; 
    })
}

export default registerCallbacks ; 