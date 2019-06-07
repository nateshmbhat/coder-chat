import socketIo from "socket.io"; 
import { ChatEvents, ChatMessageReceiveBody, ChatMessageSendingBody } from "../types/types";

const registerCallbacks = (soc : socketIo.Socket, io : SocketIO.Server )=>{
    console.log('/chat connected : ' , soc.id ) ; 
  
    soc.on( ChatEvents.CHATMESSAGE  , (msgObject : ChatMessageReceiveBody)=>{
      console.log('message from : ' , soc.id  , ' : ', msgObject) ; 
      
      soc.broadcast.emit( ChatEvents.CHATMESSAGE  , {
        senderSocketId : soc.id , 
        senderid : msgObject.senderid , 
        msg : msgObject.msg , 
        sendername : msgObject.sendername
      } as ChatMessageSendingBody) ; 
    })


    soc.on( ChatEvents.LIVECODETEXT , (msgObject : ChatMessageReceiveBody)=>{
      console.log('message from : ' , soc.id  , ' : ', msgObject) ; 
      
      soc.broadcast.emit( ChatEvents.LIVECODETEXT , {
        senderSocketId : soc.id , 
        senderid : msgObject.senderid , 
        msg : msgObject.msg , 
        sendername : msgObject.sendername
      } as ChatMessageSendingBody) ; 

    })


}

export default registerCallbacks ; 