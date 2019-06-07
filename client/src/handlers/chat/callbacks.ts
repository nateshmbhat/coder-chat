import { ChatEvents, MessageReceiveBody, ChatMessageType, LiveCodePeerMessage} from "../../types/mytypes";
import { ActionType } from "../../types/reducerTypes";
import { globalStore } from "../../store/globalStore";

const registerCallbacks = (sock : SocketIOClient.Socket )=>{
    console.log('Registering Callbacks... ');

    sock.on(ChatEvents.CHATMESSAGE , (msgObject:MessageReceiveBody)=>{
      console.log("message from server : " , msgObject ) ; 

      const date = new Date() ; 
      const sessionId = `${date.getDate()}${date.getMonth()}${date.getFullYear()}`

      const chat : ChatMessageType = {msg:msgObject.msg , senderid : msgObject.senderid , sendername : msgObject.sendername || msgObject.senderid , sessionid : sessionId ,time : new Date()  }

      globalStore.dispatch({type:ActionType.ADD_CHAT_MESSAGE , payload : chat })

    })

    sock.on(ChatEvents.LIVECODETEXT , (msgObject:LiveCodePeerMessage)=>{
      console.log("message from server : " , msgObject ) ; 
      globalStore.dispatch({type:ActionType.ADD_LIVECODE_PEER , payload : msgObject  })
    })
}    



export default registerCallbacks ;