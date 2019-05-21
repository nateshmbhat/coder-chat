
const registerCallbacks = (sock : SocketIOClient.Socket )=>{
    sock.on('chat-message' , (msg:any)=>{
      console.log("message from server : " , msg ) ; 
    })
}    

export default registerCallbacks ;
