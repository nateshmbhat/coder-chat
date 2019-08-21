import socketIo from "socket.io"; 
import { SocketChannel, MessageReceiveBody, ChatMessageSendingBody, LiveMessageType } from "../types/types";
import { globalStore, storeActions } from '../store/reducer';

const registerCallbacks = (soc : socketIo.Socket, io : SocketIO.Server )=>{
    console.log('/chat connected : ' , soc.id ) ; 

    soc.on('disconnect' , (reason:any)=>{
      console.log('disconnected ' + soc.id , reason ) 
      storeActions.removeDisconnectedClient({socketid : soc.id})
    })

  
    soc.on( SocketChannel.CHATMESSAGE  , (msgObject : MessageReceiveBody)=>{
      console.log('message from : ' , soc.id  , ' : ', msgObject) ; 
      
      const messageToSend : ChatMessageSendingBody = {
        senderSocketId : soc.id , 
        senderid : msgObject.senderid , 
        msg : msgObject.msg , 
        sendername : msgObject.sendername
      }

      soc.broadcast.emit( SocketChannel.CHATMESSAGE  , messageToSend ) ; 

    })

    soc.on( SocketChannel.LIVECODETEXT , (msgObject : LiveMessageType)=>{
      console.log('message from : ' , soc.id  , ' : ', msgObject) ; 

      storeActions.updateLiveCodeMapping(msgObject)
      soc.broadcast.emit( SocketChannel.LIVECODETEXT , msgObject ) ; 
    })


    soc.on(SocketChannel.GET_LIVE_CODE_MAPPING , (msg:any)=>{
      console.log('message from : ' , soc.id  , ' : ', msg) ;
      soc.emit( SocketChannel.LIVECODETEXT , globalStore.getState().liveCodePeersToCodeMap) ; 
    })
}

export default registerCallbacks ; 