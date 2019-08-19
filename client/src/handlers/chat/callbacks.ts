import { SocketChannel, MessageReceiveBody, ChatMessageType, LiveCodePeerMessage} from "../../types/types";
import { globalStore } from "../../store/globalStore";
import { getSessionId } from '../../Utils/utils';
import { sendGetLiveCodeMapToServer } from "./sender";

const registerCallbacks = (sock : SocketIOClient.Socket )=>{
    console.log('Registering Callbacks... ');

    sock.on(SocketChannel.CHATMESSAGE , (msgObject:MessageReceiveBody)=>{
      console.log("message from server : " , msgObject ) ; 

      const chat : ChatMessageType = {msg:msgObject.msg , senderid : msgObject.senderid , sendername : msgObject.sendername || msgObject.senderid , sessionid : getSessionId() ,time : new Date()  }

      globalStore.getActions().addChatMessage(chat) ; 
    })
  
    sock.on(SocketChannel.LIVECODETEXT , (msgObject:LiveCodePeerMessage)=>{
      console.log("message from server : " , msgObject ) ; 
      if(Object.keys(msgObject).length>0){
        globalStore.getActions().addLiveCodePeer(msgObject)
      }
    })

    sock.on('connect', ()=>{
      console.log('connected to server' )
      sendGetLiveCodeMapToServer() 
    })
}


export default registerCallbacks ;