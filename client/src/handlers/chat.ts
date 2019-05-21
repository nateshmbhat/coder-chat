const registerCallbacks = (sock : SocketIOClient.Socket )=>{
    sock.on('message' , (msg:any)=>{
      console.log("message from server : " , msg ) ; 
    })
}    

export default registerCallbacks ; 
  
