import { ChatEvents, MessageReceiveBody, ChatMessageType, LiveCodePeerMessage} from "../../types/mytypes";
import { globalStore } from "../../store/globalStore";

const registerCallbacks = (sock : SocketIOClient.Socket )=>{
    console.log('Registering Callbacks... ');

    sock.on(ChatEvents.CHATMESSAGE , (msgObject:MessageReceiveBody)=>{
      console.log("message from server : " , msgObject ) ; 

      const date = new Date() ; 
      const sessionId = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

      const chat : ChatMessageType = {msg:msgObject.msg , senderid : msgObject.senderid , sendername : msgObject.sendername || msgObject.senderid , sessionid : sessionId ,time : new Date()  }

      globalStore.getActions().addChatMessage(chat) ; 

    })

    sock.on(ChatEvents.LIVECODETEXT , (msgObject:LiveCodePeerMessage)=>{
      console.log("message from server : " , msgObject ) ; 
      globalStore.getActions().addLiveCodePeer(msgObject)
    })
}    



export default registerCallbacks ;